import { QUESTIONS } from "../../../../data/adre/syllogism.js";

export async function loadQuestions() {
    return QUESTIONS;
}

export function getQuestion(index) {
    return QUESTIONS[index];
}

export function totalQuestions() {
    return QUESTIONS.length;
}