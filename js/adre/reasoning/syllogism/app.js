

import {
    loadQuestions,
    getQuestion
} from "./loader.js";

import {
    checkAnswer
} from "./checker.js";

import {
    loadCurrentQuestion,
    currentQuestion,
    nextQuestion,
    previousQuestion
} from "./navigation.js";

import { renderDiagram } from "./diagram.js";


const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const resultCard = document.getElementById("resultCard");
const resultText = document.getElementById("resultText");
const explanationCard = document.getElementById("explanationCard");
const explanation = document.getElementById("explanation");
const diagramCard = document.getElementById("diagramCard");
const diagram = document.getElementById("diagram");

// ------------------------------------
// Submit Action
// ------------------------------------
submitBtn.addEventListener("click", () => {
    const q = currentQuestion();

    if (!q) {
        alert("Question not found.");
        return;
    }

    // ১. অপশন সিলেক্ট করা হয়েছে কিনা ভ্যালিডেশন
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Please select an option.");
        return;
    }

    // ২. উত্তর যাচাইকরণ
    const correct = checkAnswer(q);

    // ৩. কার্ডগুলো ভিজিবল করা
    resultCard.classList.remove("hidden");
    explanationCard.classList.remove("hidden");


if (correct) {
    resultText.textContent = "✅ Correct";
    resultText.className = "correct"; // আগের মতই থাকবে, তবে স্টাইল ক্লাসটি এখন আরও পোলিশড
} else {
    resultText.textContent = "❌ Wrong";
    resultText.className = "wrong";
}


    // ৪. এক্সপ্লেনেশন ডায়নামিকালি শো করা
    explanation.innerHTML = `
        <b>Correct Answer:</b><br>
        ${q.options[q.answer]}
        <br><br>
        <b>Explanation:</b><br>
        ${q.explanation}
    `;

    // ৫. ডায়গ্রাম রেন্ডার করা
    renderDiagram(q);

    // সাবমিট বাটন ডিজেবল করা
    submitBtn.disabled = true;
});

// ------------------------------------
// Navigation
// ------------------------------------
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", previousQuestion);

// ------------------------------------
// Start Application
// ------------------------------------
async function start(){
    await loadQuestions();
    loadCurrentQuestion();
}

start();