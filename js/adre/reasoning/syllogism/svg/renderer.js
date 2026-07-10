import { buildPlan } from "./planner.js";

import {
    renderMixed,
    renderNo,
    renderSome,
    renderSomeNot,
    renderSubset,
    renderSubsetChain
} from "./setFunction.js";

export function renderSVG(question) {

    if (!question) {
        return "";
    }

    // ----------------------------------
    // Build Plan
    // ----------------------------------

    const plan = buildPlan(question);

    if (!plan) {

        return `
        <div style="
            padding:20px;
            text-align:center;
            color:red;
            font-weight:bold;
            background:#FEF2F2;
            border:2px solid #FCA5A5;
            border-radius:10px;
        ">
            Invalid Diagram
        </div>
        `;

    }

    const {
        type,
        labels,
        relations
    } = plan;

    // ----------------------------------
    // Safety Check
    // ----------------------------------

    if (!labels || labels.length === 0) {

        return `
        <div style="
            padding:20px;
            text-align:center;
            color:red;
            font-weight:bold;
        ">
            No labels found.
        </div>
        `;

    }

    if (!relations || relations.length === 0) {

        return `
        <div style="
            padding:20px;
            text-align:center;
            color:red;
            font-weight:bold;
        ">
            No relations found.
        </div>
        `;

    }

    // ----------------------------------
    // Select Renderer
    // ----------------------------------

    switch (type) {

        case "subset":
            return renderSubset(plan);

        case "subset_chain":
            return renderSubsetChain(plan);

        case "some":
            return renderSome(plan);

        case "no":
            return renderNo(plan);

        case "some_not":
            return renderSomeNot(plan);

        case "mixed":
            return renderMixed(plan);

        default:

            console.warn(
                "Unknown diagram type:",
                type
            );

            return renderMixed(plan);

    }

}