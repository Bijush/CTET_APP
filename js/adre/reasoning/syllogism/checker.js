import { state } from "./state.js";

export function checkAnswer(question) {
    const selected = document.querySelector('input[name="option"]:checked');
    
    if (!selected) return false;

    const answer = Number(selected.value);
    const correct = answer === question.answer;

    if (correct) {
        state.score++;
    }

    state.submitted = true;
    return correct;
}