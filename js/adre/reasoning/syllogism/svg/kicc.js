export function buildKnowledgeBase(diagram) {
    const kb = {
        sets: {},
        relations: [],
        labels: []
    };

    if (!diagram) {
        return kb;
    }

    const relations = diagram.relations || [];
    const relationSet = new Set();

    function ensureSet(name) {
        if (!kb.sets[name]) {
            kb.sets[name] = {
                name,
                parent: [],
                child: [],
                some: [],
                no: [],
                someNot: []
            };
        }
    }

    function pushUnique(arr, value) {
        if (!arr.includes(value)) {
            arr.push(value);
        }
    }

    relations.forEach(r => {
        if (!r || !r.left || !r.right || !r.type) {
            return;
        }

        const left = String(r.left).trim();
        const right = String(r.right).trim();
        const type = r.type;

        ensureSet(left);
        ensureSet(right);

        const key = `${left}|${type}|${right}`;

        if (!relationSet.has(key)) {
            relationSet.add(key);
            kb.relations.push({
                left,
                right,
                type
            });
        }

        switch (type) {
            case "subset":
                pushUnique(kb.sets[left].parent, right);
                pushUnique(kb.sets[right].child, left);
                break;

            case "some":
                pushUnique(kb.sets[left].some, right);
                pushUnique(kb.sets[right].some, left);
                break;

            case "no":
                pushUnique(kb.sets[left].no, right);
                pushUnique(kb.sets[right].no, left);
                break;

            case "some_not":
                pushUnique(kb.sets[left].someNot, right);
                break;
        }
    });

    kb.labels = Object.keys(kb.sets).sort();
    return kb;
}

export function runInference(kb) {
    if (!kb || !Array.isArray(kb.relations)) {
        return kb;
    }

    const inferred = [];
    const queue = [...kb.relations];

    // FIX: Standardize lookup key matching (case-insensitive structure)
    function makeKey(left, type, right) {
        const l = String(left).trim().toLowerCase();
        const r = String(right).trim().toLowerCase();
        // Symmetric rules normalization for lookups
        if (type === "some" || type === "no") {
            return l < r ? `${l}|${type}|${r}` : `${r}|${type}|${l}`;
        }
        return `${l}|${type}|${r}`;
    }

    const relationSet = new Set(
        kb.relations.map(r => makeKey(r.left, r.type, r.right))
    );

    function exists(left, type, right) {
        return relationSet.has(makeKey(left, type, right));
    }

    function add(left, type, right, reason = "") {
        left = String(left).trim();
        right = String(right).trim();

        if (!left || !right) return;
        if (left.toLowerCase() === right.toLowerCase() && type === "subset") return;
        if (exists(left, type, right)) return;

        const relation = {
            left,
            right,
            type,
            inferred: true,
            reason
        };

        inferred.push(relation);
        relationSet.add(makeKey(left, type, right));
        queue.push(relation);
    }
/*
    // Identity Seeds
    const allLabels = new Set();
    kb.relations.forEach(r => {
        allLabels.add(r.left);
        allLabels.add(r.right);
    });

    allLabels.forEach(label => {
        add(label, "subset", label, "Self-Consistency (Identity)");
        add(label, "some", label, "Self-Consistency (Existential)");
    });
*/
    // Core Engine Loop
    while (queue.length > 0) {
        const current = queue.shift();

        // --- Subalternation Rules ---
        /*
        if (current.type === "subset") {
            add(current.left, "some", current.right, "Subalternation (All -> Some)");
        }
        */
        if (current.type === "no") {
            add(current.left, "some_not", current.right, "Subalternation (No -> Some Not)");
        }

        // --- Symmetry Rules ---
        if (current.type === "some") {
            add(current.right, "some", current.left, "Symmetric Some");
        }
        if (current.type === "no") {
            add(current.right, "no", current.left, "Symmetric No");
        }

        // --- Combined Syllogistic Rules ---
        const activePool = [...kb.relations, ...inferred];
        
        activePool.forEach(r => {
            const currentLeftLower = current.left.toLowerCase();
            const currentRightLower = current.right.toLowerCase();
            const rLeftLower = r.left.toLowerCase();
            const rRightLower = r.right.toLowerCase();

            // Subset Transitivity
            if (current.type === "subset" && r.type === "subset") {
                if (currentRightLower === rLeftLower) {
                    add(current.left, "subset", r.right, "Subset Transitivity");
                }
                if (rRightLower === currentLeftLower) {
                    add(r.left, "subset", current.right, "Subset Transitivity");
                }
            }

            // Some Propagation
            if (current.type === "some" && r.type === "subset") {
                if (currentRightLower === rLeftLower) {
                    add(current.left, "some", r.right, "Some + Subset");
                }
            }

            // Some Propagation (Reverse)
            if (current.type === "subset" && r.type === "some") {
                if (rRightLower === currentLeftLower) {
                    add(r.left, "some", current.right, "Some + Subset");
                }
            }

            // No Propagation
            if (current.type === "no" && r.type === "subset") {
                if (rRightLower === currentLeftLower) {
                    add(r.left, "no", current.right, "No + Subset");
                }
            }

            // No Propagation (Reverse)
            if (current.type === "subset" && r.type === "no") {
                if (currentRightLower === rLeftLower) {
                    add(current.left, "no", r.right, "No + Subset");
                }
            }

            // Some Not Propagation
            if (current.type === "some_not" && r.type === "subset") {
                if (rRightLower === currentLeftLower) {
                    add(r.left, "some_not", current.right, "Some Not + Subset");
                }
            }
        });
    }

    kb.relations.push(...inferred);
    return kb;
}

export function detectContradictions(kb) {
    if (!kb || !Array.isArray(kb.relations)) {
        return [];
    }

    const relations = kb.relations;
    const contradictions = [];

    function normalizePair(left, right) {
        const l = left.toLowerCase();
        const r = right.toLowerCase();
        return l < r ? `${l}|${r}` : `${r}|${l}`;
    }

    function addConflict(type, left, right, reason) {
        const pair = normalizePair(left, right);
        const exists = contradictions.some(c => c.type === type && c.pair === pair);

        if (exists) return;

        contradictions.push({ type, left, right, pair, reason });
    }

    for (let i = 0; i < relations.length; i++) {
        const a = relations[i];
        const aLeftLower = a.left.toLowerCase();
        const aRightLower = a.right.toLowerCase();

        for (let j = i + 1; j < relations.length; j++) {
            const b = relations[j];
            const bLeftLower = b.left.toLowerCase();
            const bRightLower = b.right.toLowerCase();

            const directMatch = aLeftLower === bLeftLower && aRightLower === bRightLower;
            const flippedMatch = aLeftLower === bRightLower && aRightLower === bLeftLower;

            if (!directMatch && !flippedMatch) continue;

            // All vs No
            if ((a.type === "subset" && b.type === "no") || (a.type === "no" && b.type === "subset")) {
                addConflict(
                    "subset_vs_no",
                    a.left,
                    a.right,
                    `Contradiction: A set cannot be a subset and completely separate at the same time.`
                );
            }

            // Some vs No
            if ((a.type === "some" && b.type === "no") || (a.type === "no" && b.type === "some")) {
                addConflict(
                    "some_vs_no",
                    a.left,
                    a.right,
                    `Contradiction: "Some" and "No" cannot both be true for the same sets.`
                );
            }

            // All vs Some Not
            if (directMatch) {
                if ((a.type === "subset" && b.type === "some_not") || (a.type === "some_not" && b.type === "subset")) {
                    addConflict(
                        "subset_vs_some_not",
                        a.left,
                        a.right,
                        `Contradiction: Universal affirmative ("All") conflicts with particular negative ("Some Not").`
                    );
                }
            }
        }
    }

    relations.forEach(r => {
        if (r.left.toLowerCase() === r.right.toLowerCase() && (r.type === "no" || r.type === "some_not")) {
            addConflict(
                "self_contradiction",
                r.left,
                r.right,
                `Contradiction: A set (${r.left}) cannot be disjoint from or exclude parts of itself.`
            );
        }
    });

    return contradictions;
}

export function evaluateConclusions(question, kb) {
    if (!question || !kb || !Array.isArray(question.conclusions)) {
        return [];
    }

    const relations = kb.relations || [];

    function parseConclusion(text) {
        if (!text) return null;
        const cleanText = String(text).trim().replace(/\s+/g, " ");

        const subsetMatch = cleanText.match(/^(?:all|every)\s+(.+?)\s+(?:are|is)\s+(.+)$/i);
        if (subsetMatch) return { left: subsetMatch[1].trim(), type: "subset", right: subsetMatch[2].trim() };

        const someNotMatch = cleanText.match(/^some\s+(.+?)\s+(?:are\s+not|is\s+not)\s+(.+)$/i);
        if (someNotMatch) return { left: someNotMatch[1].trim(), type: "some_not", right: someNotMatch[2].trim() };

        const someMatch = cleanText.match(/^some\s+(.+?)\s+(?:are|is)\s+(.+)$/i);
        if (someMatch) return { left: someMatch[1].trim(), type: "some", right: someMatch[2].trim() };

        const noMatch = cleanText.match(/^no\s+(.+?)\s+(?:are|is)\s+(.+)$/i);
        if (noMatch) return { left: noMatch[1].trim(), type: "no", right: noMatch[2].trim() };

        return null;
    }

    return question.conclusions.map(conclusionText => {
        const parsed = parseConclusion(conclusionText);

        if (!parsed) {
            return {
                conclusion: conclusionText,
                follows: false,
                reason: "Unsupported conclusion sentence format."
            };
        }

        const matchingRelation = relations.find(r => 
            r.left.toLowerCase() === parsed.left.toLowerCase() &&
            r.type === parsed.type &&
            r.right.toLowerCase() === parsed.right.toLowerCase()
        );

        const follows = !!matchingRelation;
        let finalReason = "Conclusion does not follow based on the provided premises.";
        if (follows) {
            finalReason = matchingRelation.inferred && matchingRelation.reason
                ? `Conclusion follows via [${matchingRelation.reason}].`
                : "Conclusion follows (Directly stated in premises).";
        }

        return {
            conclusion: conclusionText,
            follows,
            type: parsed.type,
            left: parsed.left,
            right: parsed.right,
            reason: finalReason
        };
    });
}

export function relationExists(relations, target) {
    if (!Array.isArray(relations) || !target || !target.left || !target.right || !target.type) {
        return false;
    }

    const targetLeft = String(target.left).trim().toLowerCase();
    const targetRight = String(target.right).trim().toLowerCase();
    const targetType = target.type;

    return relations.some(r => {
        if (r.type !== targetType) return false;

        const currentLeft = String(r.left).trim().toLowerCase();
        const currentRight = String(r.right).trim().toLowerCase();

        switch (targetType) {
            case "subset":
            case "some_not":
                return currentLeft === targetLeft && currentRight === targetRight;
            case "some":
            case "no":
                return (
                    (currentLeft === targetLeft && currentRight === targetRight) ||
                    (currentLeft === targetRight && currentRight === targetLeft)
                );
            default:
                return false;
        }
    });
}