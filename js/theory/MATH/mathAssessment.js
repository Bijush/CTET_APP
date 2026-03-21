/* CREATE TABS */

createTabs([

{ id:"formative", icon:"📘", label:"Formative" },

{ id:"summative", icon:"📝", label:"Summative" },

{ id:"diagnostic", icon:"🔍", label:"Diagnostic" },

{ id:"remedial", icon:"🛠", label:"Remedial" },

{ id:"cce", icon:"📊", label:"CCE" },

{ id:"bloom", icon:"🧠", label:"Bloom" },

{ id:"hots", icon:"🚀", label:"HOTS" }

]);


/* ======================
FORMATIVE
====================== */

function formativeTheory(){
return `

<div class="card">
<h3>📘 Formative Assessment (গঠনমূলক মূল্যায়ন)</h3>

<div class="feature-card">
Formative Assessment is a continuous and ongoing evaluation used during the teaching-learning process to improve learning.
<br>
<span class="feature-bn">
Formative Assessment হলো শিক্ষাদান চলাকালীন ব্যবহৃত ধারাবাহিক মূল্যায়ন যার উদ্দেশ্য শিক্ষার উন্নতি করা।
</span>
</div>

<div class="feature-card">
It helps teachers understand students’ strengths, weaknesses and learning needs.
<br>
<span class="feature-bn">
এটি শিক্ষককে শিক্ষার্থীদের শক্তি, দুর্বলতা এবং শেখার প্রয়োজন বুঝতে সাহায্য করে।
</span>
</div>

<div class="feature-card">
It provides feedback and helps modify teaching strategies.
<br>
<span class="feature-bn">
এটি প্রতিক্রিয়া (feedback) প্রদান করে এবং শিক্ষাদান পদ্ধতি পরিবর্তনে সাহায্য করে।
</span>
</div>

<div class="feature-card">
Examples: Observation, quizzes, oral questioning, worksheets, classroom discussion.
<br>
<span class="feature-bn">
উদাহরণ: পর্যবেক্ষণ, কুইজ, মৌখিক প্রশ্ন, ওয়ার্কশিট, শ্রেণি আলোচনা।
</span>
</div>

<div class="feature-ctet">
CTET Keywords: Continuous • Diagnostic • Feedback • Improvement Oriented
</div>

</div>


<div class="card">
<h3>🆚 Formative vs Summative Assessment</h3>

<div class="feature-card">
Formative Assessment is conducted during the learning process.
<br>
<span class="feature-bn">
Formative Assessment শেখার সময় করা হয়।
</span>
</div>

<div class="feature-card">
Summative Assessment is conducted at the end of a term or course.
<br>
<span class="feature-bn">
Summative Assessment সেশনের শেষে করা হয়।
</span>
</div>

<div class="feature-card">
Formative focuses on improvement and feedback.
<br>
<span class="feature-bn">
Formative এর লক্ষ্য শেখার উন্নতি।
</span>
</div>

<div class="feature-card">
Summative focuses on grading and final result.
<br>
<span class="feature-bn">
Summative এর লক্ষ্য নম্বর প্রদান ও চূড়ান্ত মূল্যায়ন।
</span>
</div>

</div>


<div class="card">
<h3>📊 Formative Assessment Cycle</h3>

<div class="feature-card">
Teach → Assess → Feedback → Improve Learning
<br>
<span class="feature-bn">
শিক্ষাদান → মূল্যায়ন → প্রতিক্রিয়া → শেখার উন্নতি
</span>
</div>

<div class="feature-card">
The cycle repeats continuously during classroom teaching.
<br>
<span class="feature-bn">
এই প্রক্রিয়াটি শ্রেণিকক্ষে বারবার চলতে থাকে।
</span>
</div>

</div>


<div class="card">
<h3>🧠 Memory Trick</h3>

<div class="feature-card">
Think: <b>FA = Feedback for Advancement</b>
<br>
<span class="feature-bn">
মনে রাখার সহজ উপায়: FA = শেখার উন্নতির জন্য প্রতিক্রিয়া।
</span>
</div>

</div>

<div class="card">

<h3>📝 Formative Assessment — CTET MCQ</h3>

<!-- MCQ 1 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
1️⃣ Formative assessment is mainly used for:
</div>

<div class="mcq-opt">A. Final grading</div>
<div class="mcq-opt correct">B. Improving learning</div>
<div class="mcq-opt">C. Certification</div>
<div class="mcq-opt">D. Ranking students</div>

<div class="mcq-answer">
✔ Focus is improvement, not marks.
</div>

</div>


<!-- MCQ 2 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
2️⃣ Which is an example of formative assessment?
</div>

<div class="mcq-opt">A. Board exam</div>
<div class="mcq-opt">B. Final exam</div>
<div class="mcq-opt correct">C. Classroom observation</div>
<div class="mcq-opt">D. Annual exam</div>

<div class="mcq-answer">
✔ Continuous classroom monitoring.
</div>

</div>


<!-- MCQ 3 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
3️⃣ Formative assessment mainly provides:
</div>

<div class="mcq-opt">A. Grades</div>
<div class="mcq-opt correct">B. Feedback</div>
<div class="mcq-opt">C. Certificate</div>
<div class="mcq-opt">D. Ranking</div>

<div class="mcq-answer">
✔ Feedback helps improve learning.
</div>

</div>


<!-- MCQ 4 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
4️⃣ Formative assessment is conducted:
</div>

<div class="mcq-opt">A. End of year</div>
<div class="mcq-opt">B. End of course</div>
<div class="mcq-opt correct">C. During learning process</div>
<div class="mcq-opt">D. Only after exam</div>

<div class="mcq-answer">
✔ Continuous assessment.
</div>

</div>


<!-- MCQ 5 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
5️⃣ Formative assessment is part of:
</div>

<div class="mcq-opt correct">A. CCE</div>
<div class="mcq-opt">B. IQ test</div>
<div class="mcq-opt">C. Entrance exam</div>
<div class="mcq-opt">D. Board exam</div>

<div class="mcq-answer">
✔ Continuous and Comprehensive Evaluation.
</div>

</div>


<!-- MCQ 6 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
6️⃣ Main aim of formative assessment:
</div>

<div class="mcq-opt">A. Promotion</div>
<div class="mcq-opt correct">B. Learning improvement</div>
<div class="mcq-opt">C. Certification</div>
<div class="mcq-opt">D. Ranking</div>

<div class="mcq-answer">
✔ Focus on learning progress.
</div>

</div>


<!-- MCQ 7 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
7️⃣ Which tool is used in formative assessment?
</div>

<div class="mcq-opt">A. Board exam</div>
<div class="mcq-opt">B. Entrance exam</div>
<div class="mcq-opt correct">C. Quiz</div>
<div class="mcq-opt">D. Annual exam</div>

<div class="mcq-answer">
✔ Quiz helps monitor learning.
</div>

</div>


<!-- MCQ 8 -->
<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
8️⃣ Formative assessment helps teacher to:
</div>

<div class="mcq-opt">A. Rank students</div>
<div class="mcq-opt correct">B. Modify teaching methods</div>
<div class="mcq-opt">C. Give certificates</div>
<div class="mcq-opt">D. Conduct board exam</div>

<div class="mcq-answer">
✔ Feedback improves teaching strategy.
</div>

</div>

</div>
`;
}


/* ======================
SUMMATIVE
====================== */

function summativeTheory(){
return `

<div class="card">
<h3>📝 Summative Assessment</h3>

<div class="feature-card">
Assessment at the end of unit or term.
<br><span class="feature-bn">
ইউনিট বা টার্ম শেষে মূল্যায়ন।
</span>
</div>

<div class="feature-card">
Examples: Final exam, unit test.
</div>

<div class="feature-ctet">
CTET Trap: Only marks-based evaluation ❌
</div>

</div>

`;
}


/* ======================
DIAGNOSTIC
====================== */

function diagnosticTheory(){
return `

<div class="card">
<h3>🔍 Diagnostic Test</h3>

<div class="feature-card">
Identifies learning difficulties.
<br><span class="feature-bn">
শেখার অসুবিধা চিহ্নিত করে।
</span>
</div>

<div class="feature-card">
Used before remedial teaching.
<br><span class="feature-bn">
পুনর্বাসনমূলক শিক্ষণের আগে ব্যবহৃত হয়।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Error analysis
</div>

</div>

`;
}


/* ======================
REMEDIAL
====================== */

function remedialTheory(){
return `

<div class="card">
<h3>🛠 Remedial Teaching</h3>

<div class="feature-card">
Given after diagnosis of errors.
<br><span class="feature-bn">
ত্রুটি নির্ণয়ের পরে প্রদান করা হয়।
</span>
</div>

<div class="feature-card">
Focuses on correcting misconceptions.
<br><span class="feature-bn">
ভুল ধারণা সংশোধনে জোর দেয়।
</span>
</div>

<div class="feature-ctet">
Sequence: Diagnostic → Remedial
</div>

</div>

`;
}


/* ======================
CCE
====================== */

function cceTheory(){
return `

<div class="card">
<h3>📊 CCE (Continuous and Comprehensive Evaluation)</h3>

<div class="feature-card">
Evaluates both scholastic and co-scholastic areas.
<br><span class="feature-bn">
শিক্ষাগত ও সহ-শিক্ষাগত উভয় ক্ষেত্র মূল্যায়ন করে।
</span>
</div>

<div class="feature-card">
Continuous + Comprehensive approach.
</div>

<div class="feature-ctet">
CTET Line: Holistic development
</div>

</div>

`;
}


/* ======================
BLOOM
====================== */

function bloomTheory(){
return `

<div class="card">
<h3>🧠 Bloom’s Taxonomy in Mathematics</h3>

<div class="feature-card">
Levels: Remember → Understand → Apply → Analyze → Evaluate → Create
</div>

<div class="feature-card">
Math should move beyond remembering formulas.
<br><span class="feature-bn">
গণিত শুধু সূত্র মুখস্থে সীমাবদ্ধ নয়।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Higher Order Thinking
</div>

</div>

`;
}


/* ======================
HOTS
====================== */

function hotsTheory(){
return `

<div class="card">
<h3>🚀 HOTS (Higher Order Thinking Skills)</h3>

<div class="feature-card">
Questions that require reasoning and application.
<br><span class="feature-bn">
যুক্তি ও প্রয়োগভিত্তিক প্রশ্ন।
</span>
</div>

<div class="feature-card">
Encourages critical thinking in math.
</div>

<div class="feature-ctet">
Exam Trap: Only procedural questions ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

formative: formativeTheory(),
summative: summativeTheory(),
diagnostic: diagnosticTheory(),
remedial: remedialTheory(),
cce: cceTheory(),
bloom: bloomTheory(),
hots: hotsTheory()

};