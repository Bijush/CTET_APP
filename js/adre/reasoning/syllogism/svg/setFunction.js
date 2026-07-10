import {
    safe,
    buildSVG
} from "./common.js";

import buildPatternLayout from "./patternLayout.js";

export function renderMixed(question) {

    const diagram = question.diagram || {};

    // ----------------------------------
    // Always use original data file
    // ----------------------------------

    diagram.labels = Array.isArray(diagram.labels)
        ? [...new Set(diagram.labels)]
        : [];

    diagram.relations = (diagram.relations || []).filter(r =>
        r &&
        r.left &&
        r.right &&
        r.type &&
        r.left !== r.right
    );

    // ----------------------------------
    // Build Pattern Layout
    // ----------------------------------

    const layout = buildPatternLayout(diagram);

    const circles =
        layout.drawOrder ||
        Object.values(layout.circles);

    // Fallback dictionary for custom rendering colors in layout order
    const strokeColors = {
        "#2563EB": "#2563EB",
        "#16A34A": "#16A34A",
        "#DC2626": "#DC2626",
        "#D97706": "#D97706",
        "#7C3AED": "#7C3AED",
        "#DB2777": "#DB2777",
        "#0F766E": "#0F766E",
        "#475569": "#475569"
    };

    const fillColors = {
        "#2563EB": "#DBEAFE",
        "#16A34A": "#DCFCE7",
        "#DC2626": "#FEE2E2",
        "#D97706": "#FEF3C7",
        "#7C3AED": "#EDE9FE",
        "#DB2777": "#FCE7F3",
        "#0F766E": "#CCFBF1",
        "#475569": "#E2E8F0"
    };

    let svg = "";

    // --------------------------
    // Draw Circles
    // --------------------------

    circles.forEach((circle) => {
        const strokeColor = strokeColors[circle.color] || circle.color || "#475569";
        const fillColor = fillColors[circle.color] || "#E2E8F0";

        svg += `
<circle
cx="${circle.x}"
cy="${circle.y}"
r="${circle.r}"
fill="${fillColor}"
fill-opacity="0.75"
stroke="${strokeColor}"
stroke-width="5"/>

<circle
cx="${circle.x}"
cy="${circle.y}"
r="${circle.r - 6}"
fill="none"
stroke="white"
stroke-opacity="0.4"
stroke-width="2"/>
`;

    });

    // --------------------------
    // Draw Labels
    // --------------------------

    circles.forEach((circle) => {
        const strokeColor = strokeColors[circle.color] || circle.color || "#475569";

        // Dynamic font size handling for longer text
        const fontSize = circle.label.length > 10 ? 18 : 24;

        // Fix overlapping: If it's a parent circle, move the text near the top perimeter of the circle
        let textY = circle.y + 8;
        if (circle.mode === "parent" || circle.mode === "inside") {
            textY = circle.y - circle.r + 45; // Shifts the text up safely inside the outer circle
        }

        svg += `
<text
x="${circle.x}"
y="${textY}"
text-anchor="middle"
font-size="${fontSize}"
font-family="Arial"
font-weight="bold"
fill="${strokeColor}"
filter="url(#softShadow)">
${safe(circle.label)}
</text>
`;

    });

    return buildSVG(
        "Venn / Euler Diagram",
        svg
    );

}

export function renderNo(question) {

    const relation =
        question.diagram?.relations?.[0] || {};

    const left =
        safe(relation.left || question.diagram?.left || "A");

    const right =
        safe(relation.right || question.diagram?.right || "B");

    const content = `
<circle
cx="420"
cy="470"
r="170"
fill="#DBEAFE"
fill-opacity="0.75"
stroke="#2563EB"
stroke-width="6"/>

<circle
cx="780"
cy="470"
r="170"
fill="#FEE2E2"
fill-opacity="0.75"
stroke="#DC2626"
stroke-width="6"/>

<text
x="420"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#1D4ED8">
${left}
</text>

<text
x="780"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#DC2626">
${right}
</text>
`;

    return buildSVG(
        "No Relation Diagram",
        content
    );
}

export function renderSome(question) {

    const relation =
        question.diagram?.relations?.[0] || {};

    const left =
        safe(relation.left || question.diagram?.left || "A");

    const right =
        safe(relation.right || question.diagram?.right || "B");

    const content = `
<circle
cx="500"
cy="470"
r="170"
fill="#DBEAFE"
fill-opacity="0.75"
stroke="#2563EB"
stroke-width="6"/>

<circle
cx="700"
cy="470"
r="170"
fill="#DCFCE7"
fill-opacity="0.75"
stroke="#16A34A"
stroke-width="6"/>

<circle
cx="600"
cy="470"
r="24"
fill="#0F172A"/>

<text
x="440"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#1D4ED8">
${left}
</text>

<text
x="760"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#15803D">
${right}
</text>
`;

    return buildSVG(
        "Some Relation Diagram",
        content
    );
}

export function renderSomeNot(question) {

    const relation =
        question.diagram?.relations?.[0] || {};

    const left =
        safe(relation.left || question.diagram?.left || "A");

    const right =
        safe(relation.right || question.diagram?.right || "B");

    const content = `
<circle
cx="500"
cy="470"
r="170"
fill="#DBEAFE"
fill-opacity="0.75"
stroke="#2563EB"
stroke-width="6"/>

<circle
cx="690"
cy="470"
r="170"
fill="#FEE2E2"
fill-opacity="0.75"
stroke="#DC2626"
stroke-width="6"/>

<circle
cx="395"
cy="470"
r="14"
fill="#DC2626"/>

<text
x="440"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#1D4ED8">
${left}
</text>

<text
x="760"
y="270"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#DC2626">
${right}
</text>
`;

    return buildSVG(
        "Some Not Relation Diagram",
        content
    );
}

export function renderSubset(question) {

    const relation =
        question.diagram?.relations?.[0] || {};

    const left =
        safe(
            relation.left ||
            question.diagram?.left ||
            "A"
        );

    const right =
        safe(
            relation.right ||
            question.diagram?.right ||
            "B"
        );

    const content = `
<circle
cx="600"
cy="470"
r="230"
fill="#DCFCE7"
fill-opacity="0.75"
stroke="#16A34A"
stroke-width="6"/>

<circle
cx="600"
cy="470"
r="110"
fill="#DBEAFE"
fill-opacity="0.85"
stroke="#2563EB"
stroke-width="6"/>

<text
x="600"
y="220"
text-anchor="middle"
font-size="28"
font-family="Arial"
font-weight="bold"
fill="#15803D">
${right}
</text>

<text
x="600"
y="475"
text-anchor="middle"
font-size="24"
font-family="Arial"
font-weight="bold"
fill="#1D4ED8">
${left}
</text>
`;

    return buildSVG(
        "Subset Diagram",
        content
    );

}

export function renderSubsetChain(question) {

    const relations = question.diagram?.relations || [];
    const labels = question.diagram?.labels || [];

    // ----------------------------------------------------
    // Topological Sort Logic for Perfect Ordering
    // ----------------------------------------------------
    const adj = {};
    const inDegree = {};

    labels.forEach(l => {
        adj[l] = [];
        inDegree[l] = 0;
    });

    relations.forEach(r => {
        if (r.type === "subset") {
            // left -> right মানে left নোডটি right এর ভেতরে আছে
            if (adj[r.left] && adj[r.right] !== undefined) {
                adj[r.left].push(r.right);
                inDegree[r.right]++;
            }
        }
    });

    const queue = [];
    labels.forEach(l => {
        if (inDegree[l] === 0) {
            queue.push(l);
        }
    });

    const ordered = [];
    while (queue.length > 0) {
        const curr = queue.shift();
        ordered.push(curr);

        (adj[curr] || []).forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    // ordered অ্যারোটি এখন নিখুঁতভাবে [Inner, Middle, Outer] ফরমেটে সাজানো আছে।
    const inner = safe(ordered[0] || labels[0] || "A");
    const middle = safe(ordered[1] || labels[1] || "B");
    const outer = safe(ordered[2] || labels[2] || "C");

    const content = `
<circle
cx="600"
cy="470"
r="240"
fill="#FEF3C7"
fill-opacity="0.70"
stroke="#D97706"
stroke-width="6"/>

<circle
cx="600"
cy="470"
r="160"
fill="#DCFCE7"
fill-opacity="0.75"
stroke="#16A34A"
stroke-width="6"/>

<circle
cx="600"
cy="470"
r="80"
fill="#DBEAFE"
fill-opacity="0.85"
stroke="#2563EB"
stroke-width="6"/>

<text
x="600"
y="205"
text-anchor="middle"
font-size="28"
font-family="Arial"
font-weight="bold"
fill="#B45309">
${outer}
</text>

<text
x="600"
y="330"
text-anchor="middle"
font-size="26"
font-family="Arial"
font-weight="bold"
fill="#15803D">
${middle}
</text>

<text
x="600"
y="476"
text-anchor="middle"
font-size="22"
font-family="Arial"
font-weight="bold"
fill="#1D4ED8">
${inner}
</text>
`;

    return buildSVG(
        "Subset Chain Diagram",
        content
    );

}