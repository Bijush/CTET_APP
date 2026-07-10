// --------------------------------------
// Planner
// --------------------------------------

import {
    buildKnowledgeBase,
    runInference,
    detectContradictions,
    evaluateConclusions
} from "./kicc.js";

export function buildPlan(question) {

    if (!question || !question.diagram) {
        return null;
    }

    // ----------------------------------
    // Clone Original Diagram
    // ----------------------------------

    const diagram = {

        ...question.diagram,

        labels: Array.isArray(question.diagram.labels)
            ? [...question.diagram.labels]
            : [],

        relations: Array.isArray(question.diagram.relations)
            ? question.diagram.relations.map(r => ({
                left: String(r.left).trim(),
                right: String(r.right).trim(),
                type: String(r.type).trim()
            }))
            : []

    };

    // ----------------------------------
    // Knowledge Base
    // ----------------------------------

    let kb = buildKnowledgeBase(diagram);

    // ----------------------------------
    // Inference
    // ----------------------------------

    kb = runInference(kb);

    // ----------------------------------
    // Contradictions
    // ----------------------------------

    const contradictions =
        detectContradictions(kb);

    // ----------------------------------
    // Conclusions
    // ----------------------------------

    const conclusions =
        evaluateConclusions(
            question,
            kb
        );

    // ----------------------------------
    // Original Diagram Data
    // ----------------------------------

    const diagramRelations =
        diagram.relations;

    const diagramLabels =
        diagram.labels.length
            ? diagram.labels
            : kb.labels;

    // ----------------------------------
    // Renderer Decision
    // ----------------------------------

    let renderType = "mixed";

    if (diagramRelations.length === 1) {

        renderType =
            diagramRelations[0].type;

    }

    // UPDATED: ২ বা তার বেশি (যেমন ৩টি) "subset" রিলেশন থাকলে 
    // যেন "subset_chain" লেআউট ট্রিগার হয়।
    else if (
        diagramRelations.length >= 2 &&
        diagramRelations.every(
            r => r.type === "subset"
        )
    ) {

        renderType = "subset_chain";

    }

    else {

        renderType = "mixed";

    }

    // ----------------------------------
    // Final Plan
    // ----------------------------------

    return {

        type: renderType,

        diagram: {

            ...diagram,

            type: renderType,

            labels: diagramLabels,

            relations: diagramRelations,

            left:
                diagramRelations[0]?.left ||
                diagram.left ||
                "",

            right:
                diagramRelations[0]?.right ||
                diagram.right ||
                ""

        },

        knowledgeBase: kb,

        contradictions,

        conclusions,

        labels: diagramLabels,

        relations: diagramRelations

    };

}