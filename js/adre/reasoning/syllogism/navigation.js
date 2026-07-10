import { state } from "./state.js";
import { getQuestion, totalQuestions } from "./loader.js";
import { renderQuestion } from "./renderer.js"; // Note: This is question options renderer, not SVG renderer

export function currentQuestion() {
    return getQuestion(state.current);
}

function hideResult() {
    document.getElementById("resultCard").classList.add("hidden");
    document.getElementById("explanationCard").classList.add("hidden");
    document.getElementById("diagramCard").classList.add("hidden");
    document.getElementById("submitBtn").disabled = false;
}

function updateProgress() {
    document.getElementById("progress").textContent = 
        `Question ${state.current + 1} / ${totalQuestions()}`;
}

export function loadCurrentQuestion() {
    const question = currentQuestion();
    if (!question) return;

    renderQuestion(question);
    hideResult();
    updateProgress();
}

export function nextQuestion() {
    if (state.current < totalQuestions() - 1) {
        state.current++;
        loadCurrentQuestion();
    }
}

export function previousQuestion() {
    if (state.current > 0) {
        state.current--;
        loadCurrentQuestion();
    }
}