import { renderSVG } from "./svg/renderer.js";
import { generateDiagram } from "./diagramGenerator.js";
import { buildPlan } from "./svg/planner.js";

export function renderDiagram(question) {
    const diagramCard = document.getElementById("diagramCard");
    const diagram = document.getElementById("diagram");

    // Clear previous diagram
    diagram.innerHTML = "";
    diagramCard.classList.add("hidden");

    if (!question) return;

    // ১. মেইন স্টেটমেন্ট ডায়াগ্রাম রেন্ডার
    question.diagram = generateDiagram(question);
    const mainSvg = renderSVG(question);
    if (!mainSvg) return;

    let htmlContent = `
        <div class="main-diagram-section" style="margin-bottom: 35px; width: 100%;">
            <h3 style="font-family: Arial, sans-serif; color: #1E293B; margin-bottom: 12px; font-size: 18px; font-weight: 600; border-left: 4px solid #2563EB; padding-left: 10px;">
                Main Premises Diagram (প্রধান চিত্র):
            </h3>
            <div style="width: 100%; max-width: 600px; margin: 0 auto;">
                ${mainSvg}
            </div>
        </div>
    `;

    // ২. আলাদা আলাদা Conclusion ডায়াগ্রাম জেনারেট করা
    const plan = buildPlan(question);
    if (plan && plan.conclusions && plan.conclusions.length > 0) {
        htmlContent += `
            <div class="conclusions-diagram-section" style="border-top: 2px dashed #CBD5E1; padding-top: 25px; width: 100%;">
                <h3 style="font-family: Arial, sans-serif; color: #1E293B; margin-bottom: 18px; font-size: 18px; font-weight: 600; border-left: 4px solid #64748B; padding-left: 10px;">
                    Conclusion Diagrams (উপসংহারের চিত্রসমূহ):
                </h3>
                <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        `;

        plan.conclusions.forEach((conclusionObj, index) => {
            // ফিক্স: টাইপ নির্ধারণ করা (যেমন: "No Engineers are Doctors" এর জন্য type হবে "no")
            const mockQuestion = {
                diagram: {
                    type: conclusionObj.type, // কিক ইঞ্জিন থেকে সরাসরি টাইপ (no, subset, some ইত্যাদি) নেওয়া হচ্ছে
                    relations: [{
                        left: conclusionObj.left,
                        right: conclusionObj.right,
                        type: conclusionObj.type
                    }],
                    labels: [conclusionObj.left, conclusionObj.right]
                }
            };

            // সঠিক রিলেশন টাইপ অনুযায়ী নিখুঁত SVG জেনারেট হবে
            const conclusionSvg = renderSVG(mockQuestion);

            const badgeColor = conclusionObj.follows ? '#16A34A' : '#DC2626';
            const badgeBg = conclusionObj.follows ? '#DCFCE7' : '#FEE2E2';

            htmlContent += `
                <div style="background: #F8FAFC; padding: 18px; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
                        <p style="font-family: Arial, sans-serif; font-size: 15px; font-weight: 700; margin: 0; color: #334155;">
                            Conclusion ${index + 1}: ${conclusionObj.conclusion} 
                        </p>
                        <span style="font-family: Arial, sans-serif; font-size: 13px; font-weight: 700; color: ${badgeColor}; background: ${badgeBg}; padding: 4px 12px; border-radius: 20px; border: 1px solid ${badgeColor}33;">
                            ${conclusionObj.follows ? '✓ Follows' : '✕ Does Not Follow'}
                        </span>
                    </div>
                    <div style="width: 100%; max-width: 450px; margin: 0 auto;">
                        ${conclusionSvg}
                    </div>
                </div>
            `;
        });

        htmlContent += `</div></div>`;
    }

    diagram.innerHTML = htmlContent;
    diagramCard.classList.remove("hidden");
}