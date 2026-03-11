export function saveResultAndGo({
  questionOrder,
  filteredQuestions,
  attemptMap,
  selectedSubject,
  resultKey,
  getIndexKey,
  getOrderKey,
  getAttemptKey
}){

  const total = questionOrder.length;

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  const detailedReview = [];

  for (let i = 0; i < total; i++) {

    const qIndex = questionOrder[i];
    const q = filteredQuestions[qIndex];

    if(!q) continue;

    const attempt = attemptMap[q.id];

    let status = "skipped";

    if (!attempt || attempt.answered !== true) {

      skipped++;
      status = "skipped";

    }
    else if (attempt.correct === true) {

      correct++;
      status = "correct";

    }
    else {

      wrong++;
      status = "wrong";

    }

    detailedReview.push({
      id: q.id,
      question_en: q.q_en,
      question_bn: q.q_bn,
      options_en: q.options_en,
      options_bn: q.options_bn,
      correctAnswer: q.ans,
      selected: attempt?.selected ?? null,
      status: status,
      explanation_en: q.ans_reason_en || "",
      explanation_bn: q.ans_reason_bn || "",
      concept: q.concept || "",
      exam: q.exam || "",
      year: q.year || ""
    });

  }

  const resultData = {
    subject: selectedSubject,
    total: total,
    correct: correct,
    wrong: wrong,
    skipped: skipped,
    percentage:
      total > 0
        ? ((correct / total) * 100).toFixed(1)
        : "0.0",
    date: new Date().toLocaleString(),
    review: detailedReview
  };

  /* SAVE LAST PAGE */

  localStorage.setItem(
    "last_test_page",
    location.href
  );

  localStorage.setItem(
    "last_test_type",
    resultKey || "MCQ"
  );

  /* SAVE RESULT */

  localStorage.setItem(
    resultKey,
    JSON.stringify(resultData)
  );

  /* HISTORY */

  let history =
    JSON.parse(
      localStorage.getItem(
        resultKey.replace("result","history")
      )
    ) || [];

  history.unshift(resultData);

  if(history.length > 50){
    history = history.slice(0,50);
  }

  localStorage.setItem(
    resultKey.replace("result","history"),
    JSON.stringify(history)
  );

  /* CLEAR SESSION */

  localStorage.removeItem(getIndexKey());
  localStorage.removeItem(getOrderKey());
  localStorage.removeItem(getAttemptKey());

  /* GO RESULT PAGE */

  window.location.href = "../result.html";

}