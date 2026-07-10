export function generateDiagram(question) {

    if (!question) {
        return null;
    }

    // ----------------------------------
    // Use diagram from data file
    // ----------------------------------

    if (
        question.diagram &&
        Array.isArray(question.diagram.relations)
    ) {

        const diagram = {
            type: question.diagram.type || "mixed",
            labels: [
                ...(question.diagram.labels || [])
            ],
            relations: [
                ...(question.diagram.relations || [])
            ]
        };

        // Remove duplicate labels
        diagram.labels = [
            ...new Set(
                diagram.labels.map(
                    label => String(label).trim()
                )
            )
        ];

        // Remove duplicate relations & Clean whitespaces safely
        const seen = new Set();
        const cleanedRelations = [];

        diagram.relations.forEach(relation => {
            if (
                !relation ||
                !relation.left ||
                !relation.right ||
                !relation.type
            ) {
                return;
            }

            const left = String(relation.left).trim();
            const right = String(relation.right).trim();
            const type = String(relation.type).trim();

            // Standardization: Fix potential "partial" to "some_not" naming issues
            const normalizedType = type === "partial" ? "some_not" : type;

            const key = `${left}|${normalizedType}|${right}`;

            if (!seen.has(key)) {
                seen.add(key);
                // Create a new independent object to avoid modifying original reference
                cleanedRelations.push({
                    ...relation,
                    left,
                    right,
                    type: normalizedType
                });
            }
        });

        diagram.relations = cleanedRelations;

        const relationCount = diagram.relations.length;

        const onlySubset =
            relationCount > 0 &&
            diagram.relations.every(
                r => r.type === "subset"
            );

        // ----------------------------------
        // Determine Diagram Layout Type
        // ----------------------------------
        if (relationCount === 1) {
            diagram.type = diagram.relations[0].type;
            diagram.left = diagram.relations[0].left;
            diagram.right = diagram.relations[0].right;
        } 
        // Generates subset_chain for ANY number of chained subsets (2 or more)
        else if (relationCount >= 2 && onlySubset) {
            diagram.type = "subset_chain";
        } 
        else {
            diagram.type = "mixed";
        }

        return diagram;
    }

    // ----------------------------------
    // No diagram in data file
    // ----------------------------------
    return null;
}