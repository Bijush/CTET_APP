// --------------------------------------
// patternLayout.js
// --------------------------------------

// --------------------------------------
// Part 1: Constants + Helpers + Pattern Registry
// --------------------------------------
export const WIDTH = 1200;
export const HEIGHT = 900;

export const CENTER_X = WIDTH / 2;
export const CENTER_Y = HEIGHT / 2;

export const DEFAULT_RADIUS = 170;
export const CHILD_RADIUS = 95;
export const MIN_RADIUS = 70;

export const GAP = 35; // Controlled gap for better fit inside canvas

const COLORS = [
    "#2563EB",
    "#16A34A",
    "#DC2626",
    "#D97706",
    "#7C3AED",
    "#DB2777",
    "#0F766E",
    "#475569"
];

export const PATTERN = {
    SUBSET: "subset",
    OVERLAP: "overlap",
    DISJOINT: "disjoint",
    PARTIAL: "some_not", 
    MIXED: "mixed"
};

export function createPatternLayout(diagram) {
    const layout = {
        circles: {},
        relations: diagram.relations || [],
        drawOrder: []
    };

    (diagram.labels || []).forEach((label, index) => {
        layout.circles[label] = {
            label,
            x: CENTER_X,
            y: CENTER_Y,
            r: DEFAULT_RADIUS,
            mode: "normal",
            color: COLORS[index % COLORS.length]
        };
    });

    return layout;
}

export function setCircle(circle, x, y, r, mode = "normal") {
    circle.x = Math.round(x);
    circle.y = Math.round(y);
    circle.r = Math.round(r);
    circle.mode = mode;
}

export function distance(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function angle(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
}

export function move(circle, ang, amount) {
    circle.x += Math.cos(ang) * amount;
    circle.y += Math.sin(ang) * amount;
}

export function clamp(circle) {
    const margin = 40;
    circle.x = Math.max(circle.r + margin, Math.min(WIDTH - circle.r - margin, circle.x));
    circle.y = Math.max(circle.r + 120, Math.min(HEIGHT - circle.r - margin, circle.y));
}

export function relationMode(type) {
    switch (type) {
        case "subset": return PATTERN.SUBSET;
        case "some": return PATTERN.OVERLAP;
        case "no": return PATTERN.DISJOINT;
        case "some_not": return PATTERN.PARTIAL;
        default: return PATTERN.MIXED;
    }
}

export function sortRelations(relations) {
    const priority = {
        subset: 4,
        no: 3,
        some_not: 2,
        some: 1
    };
    return [...relations].sort((a, b) => (priority[b.type] || 0) - (priority[a.type] || 0));
}

// --------------------------------------
// Part 2: Subset Pattern Engine
// --------------------------------------
export function applySubsetPattern(layout, relation) {
    const child = layout.circles[relation.left];
    const parent = layout.circles[relation.right];

    if (!child || !parent) return;

    parent.mode = "parent";
    child.mode = "subset";

    parent.r = DEFAULT_RADIUS;
    child.r = CHILD_RADIUS;

    const offset = Math.max(0, parent.r - child.r - 20);
    
    // একাধিক সাবসেট চাইল্ড থাকলে যেন একে অপরের ওপর ওভারল্যাপ না করে, সেজন্য ডাইনামিক শিফট
    const existingChildren = Object.values(layout.circles).filter(
        c => c.mode === "subset" && c.label !== child.label && Math.abs(c.y - parent.y) < 5
    );
    const shift = existingChildren.length * 30;

    child.x = parent.x - offset / 2 + shift;
    child.y = parent.y;
}

export function applySubsetChain(layout) {
    layout.relations
        .filter(r => r.type === "subset")
        .forEach(r => {
            applySubsetPattern(layout, r);
        });
}

// --------------------------------------
// Part 3: Some (Overlap) Pattern Engine
// --------------------------------------
export function applySomePattern(layout, relation) {
    const left = layout.circles[relation.left];
    const right = layout.circles[relation.right];

    if (!left || !right) return;

    if (left.mode === "normal") left.mode = "overlap";
    if (right.mode === "normal") right.mode = "overlap";

    left.r = Math.max(left.r, DEFAULT_RADIUS);
    right.r = Math.max(right.r, DEFAULT_RADIUS);

    const target = (left.r + right.r) * 0.68;
    let d = distance(left, right);

    if (d === 0) {
        left.x -= target / 2;
        right.x += target / 2;
        d = distance(left, right);
    }

    const ang = angle(left, right);
    const delta = target - d;

    if (Math.abs(delta) < 1) return;

    const push = Math.abs(delta) / 2;
    const factor = circle => {
        switch (circle.mode) {
            case "subset": return 0.1; // Allowed minor flexibility
            case "parent": return 0.25;
            default: return 1;
        }
    };

    const leftFactor = factor(left);
    const rightFactor = factor(right);

    if (delta > 0) {
        move(left, ang + Math.PI, push * leftFactor);
        move(right, ang, push * rightFactor);
    } else {
        move(left, ang, push * leftFactor);
        move(right, ang + Math.PI, push * rightFactor);
    }

    clamp(left);
    clamp(right);
}

// --------------------------------------
// Part 4: No (Disjoint) Pattern Engine
// --------------------------------------
export function applyNoPattern(layout, relation) {
    const left = layout.circles[relation.left];
    const right = layout.circles[relation.right];

    if (!left || !right) return;
    if (left.mode === "subset" || right.mode === "subset") return;

    if (left.mode !== "parent") left.mode = "disjoint";
    if (right.mode !== "parent") right.mode = "disjoint";

    left.r = Math.max(left.r || DEFAULT_RADIUS, DEFAULT_RADIUS);
    right.r = Math.max(right.r || DEFAULT_RADIUS, DEFAULT_RADIUS);

    const target = left.r + right.r + GAP;
    let d = distance(left, right);

    if (d === 0) {
        left.x -= target / 2;
        right.x += target / 2;
        d = distance(left, right);
    }

    if (d >= target) return;

    const ang = angle(left, right);
    const push = (target - d) * 0.5;

    const factorLeft = left.mode === "parent" ? 0.25 : 1;
    const factorRight = right.mode === "parent" ? 0.25 : 1;

    move(left, ang + Math.PI, push * factorLeft);
    move(right, ang, push * factorRight);
}

// --------------------------------------
// Part 5: Some Not Pattern Engine
// --------------------------------------
export function applySomeNotPattern(layout, relation) {
    const left = layout.circles[relation.left];
    const right = layout.circles[relation.right];

    if (!left || !right) return;
    if (left.mode === "subset" || right.mode === "subset") return;

    if (left.mode !== "parent") left.mode = "some_not";
    if (right.mode !== "parent") right.mode = "some_not";

    left.r = Math.max(left.r || DEFAULT_RADIUS, DEFAULT_RADIUS);
    right.r = Math.max(right.r || DEFAULT_RADIUS, DEFAULT_RADIUS);

    const target = (left.r + right.r) * 0.82;
    let d = distance(left, right);

    if (d === 0) {
        left.x -= target / 2;
        right.x += target / 2;
        d = distance(left, right);
    }

    const ang = angle(left, right);
    const delta = target - d;

    if (Math.abs(delta) < 1) return;

    const push = Math.abs(delta) / 2;
    const factorLeft = left.mode === "parent" ? 0.25 : 1;
    const factorRight = right.mode === "parent" ? 0.25 : 1;

    if (delta > 0) {
        move(left, ang + Math.PI, push * factorLeft);
        move(right, ang, push * factorRight);
    } else {
        move(left, ang, push * factorLeft);
        move(right, ang + Math.PI, push * factorRight);
    }
}

// --------------------------------------
// Part 6: Mixed Pattern Solver
// --------------------------------------
export function applyMixedPatterns(layout) {
    if (!layout || !layout.relations) return layout;

    const relations = sortRelations(layout.relations);

    relations.filter(r => r.type === "subset").forEach(r => applySubsetPattern(layout, r));
    relations.filter(r => r.type === "no").forEach(r => applyNoPattern(layout, r));
    relations.filter(r => r.type === "some_not").forEach(r => applySomeNotPattern(layout, r));
    relations.filter(r => r.type === "some").forEach(r => applySomePattern(layout, r));

    Object.values(layout.circles).forEach(circle => {
        clamp(circle);
    });

    return layout;
}

// --------------------------------------
// Part 7: Chain & Nested Solver
// --------------------------------------
export function applyChainPatterns(layout) {
    if (!layout || !layout.relations) return layout;

    const subsets = layout.relations.filter(r => r.type === "subset");
    if (!subsets.length) return layout;

    const parentMap = {};
    subsets.forEach(r => {
        parentMap[r.left] = r.right;
    });

    const roots = Object.keys(layout.circles).filter(label => !parentMap[label]);
    const rootGap = 420;

    roots.forEach((rootLabel, index) => {
        const root = layout.circles[rootLabel];
        if (!root) return;

        root.mode = "parent";
        root.r = DEFAULT_RADIUS;
        root.x = CENTER_X + (index - (roots.length - 1) / 2) * rootGap;
        root.y = CENTER_Y;

        placeChildren(layout, rootLabel);
    });

    return layout;
}

function placeChildren(layout, parentLabel) {
    const parent = layout.circles[parentLabel];
    if (!parent) return;

    const children = layout.relations
        .filter(r => r.type === "subset" && r.right === parentLabel)
        .map(r => layout.circles[r.left]);

    if (!children.length) return;

    const angleStep = (Math.PI * 2) / children.length;

    children.forEach((child, index) => {
        child.mode = "subset";
        child.r = Math.max(MIN_RADIUS, parent.r * 0.56);

        const orbit = Math.max(0, parent.r - child.r - 20);
        const ang = angleStep * index;

        child.x = parent.x + Math.cos(ang) * orbit;
        child.y = parent.y + Math.sin(ang) * orbit;

        placeChildren(layout, child.label);
    });
}

// --------------------------------------
// Part 8: Auto Layout Optimizer
// --------------------------------------
export function optimizePatternLayout(layout) {
    if (!layout) return layout;

    const circles = Object.values(layout.circles);
    const relations = layout.relations || [];

    // Reduced passes to prevent force explosions
    for (let pass = 0; pass < 15; pass++) {
        for (let i = 0; i < circles.length; i++) {
            for (let j = i + 1; j < circles.length; j++) {
                const a = circles[i];
                const b = circles[j];

                if (
                    (a.mode === "parent" && b.mode === "subset") ||
                    (a.mode === "subset" && b.mode === "parent")
                ) {
                    continue;
                }

                const relation = relations.find(r =>
                    (r.left === a.label && r.right === b.label) ||
                    (r.left === b.label && r.right === a.label)
                );

                let target;
                if (relation) {
                    switch (relation.type) {
                        case "subset":
                            continue;
                        case "no":
                            target = a.r + b.r + GAP;
                            break;
                        case "some":
                            target = (a.r + b.r) * 0.68;
                            break;
                        case "some_not":
                            target = (a.r + b.r) * 0.82;
                            break;
                        default:
                            target = a.r + b.r + 20;
                    }
                } else {
                    // Do not apply pushing forces if no relation exists to avoid pushing items off-canvas
                    continue;
                }

                const d = distance(a, b);
                const ang = d === 0 ? Math.random() * Math.PI * 2 : angle(a, b);
                const delta = target - d;

                if (Math.abs(delta) < 1) continue;

                const push = Math.abs(delta) * 0.4; // Slightly relaxed push step
                const pushA = a.mode === "parent" ? push * 0.2 : push;
                const pushB = b.mode === "parent" ? push * 0.2 : push;

                if (delta > 0) {
                    move(a, ang + Math.PI, pushA);
                    move(b, ang, pushB);
                } else {
                    move(a, ang, pushA);
                    move(b, ang + Math.PI, pushB);
                }
            }
        }
        
        // Softly re-sync subset anchors during optimization runs without identical overlaps
        const processedSiblings = {};
        relations.filter(r => r.type === "subset").forEach(r => {
            const child = layout.circles[r.left];
            const parent = layout.circles[r.right];
            if (child && parent) {
                const offset = Math.max(0, parent.r - child.r - 20);
                
                if (!processedSiblings[parent.label]) {
                    processedSiblings[parent.label] = 0;
                }
                const shift = processedSiblings[parent.label] * 30;
                processedSiblings[parent.label]++;

                // Keep the child inside the updated parent safely with offset shift
                child.x = parent.x - offset / 2 + shift;
                child.y = parent.y;
            }
        });
    }

    circles.forEach(circle => {
        clamp(circle);
    });

    return layout;
}

// --------------------------------------
// Part 9: Final Pattern Builder
// --------------------------------------
export function buildPatternLayout(diagram) {
    if (!diagram) return null;

    const layout = createPatternLayout(diagram);
    layout.relations = sortRelations(diagram.relations || []);

    layout.relations.filter(r => r.type === "subset").forEach(r => applySubsetPattern(layout, r));

    applyChainPatterns(layout);
    applyMixedPatterns(layout);
    optimizePatternLayout(layout);

    Object.values(layout.circles).forEach(circle => {
        clamp(circle);
    });

    layout.drawOrder = Object.values(layout.circles).sort((a, b) => {
        if (a.mode === "parent" && b.mode !== "parent") return -1;
        if (b.mode === "parent" && a.mode !== "parent") return 1;
        if (a.mode === "subset" && b.mode !== "subset") return 1;
        if (b.mode === "subset" && a.mode !== "subset") return -1;
        if (a.r !== b.r) return b.r - a.r;
        return a.label.localeCompare(b.label);
    });

    return layout;
}

// --------------------------------------
// Part 10: Final Exports & Compatibility
// --------------------------------------
export default buildPatternLayout;

export function solvePatternLayout(diagram) {
    return buildPatternLayout(diagram);
}

export function solveConstraintLayout(layout) {
    if (!layout) return layout;
    const diagram = {
        labels: Object.keys(layout.circles),
        relations: layout.relations || []
    };
    return buildPatternLayout(diagram);
}

export function buildLayoutFromDiagram(diagram) {
    return buildPatternLayout(diagram);
}

export function getCircle(layout, label) {
    return layout.circles[label];
}

export function getCircles(layout) {
    return Object.values(layout.circles);
}

export function getRelations(layout) {
    return layout.relations || [];
}

export function hasRelation(layout, left, right, type) {
    return (layout.relations || []).some(r =>
        r.left === left && r.right === right && r.type === type
    );
}

export function normalizePattern(layout) {
    Object.values(layout.circles).forEach(circle => {
        circle.x = Math.round(circle.x);
        circle.y = Math.round(circle.y);
        circle.r = Math.round(circle.r);
        clamp(circle);
    });
    return layout;
}