/* CREATE TABS */

createTabs([

{ id:"formative", icon:"📘", label:"Formative" },

{ id:"summative", icon:"📝", label:"Summative" },

{ id:"portfolio", icon:"📂", label:"Portfolio" },

{ id:"observation", icon:"👀", label:"Observation" },

{ id:"ctet", icon:"🎯", label:"CTET Focus" }

]);


/* ======================
FORMATIVE
====================== */

function formativeTheory(){
return `

<div class="card">

<h3>📘 Formative Assessment</h3>

<div class="feature-card">
Continuous and ongoing assessment.
<br>
<span class="feature-bn">
চলমান ও ধারাবাহিক মূল্যায়ন।
</span>
</div>

<div class="feature-card">
Examples: Observation, worksheet, oral questions.
<br>
<span class="feature-bn">
উদাহরণ: পর্যবেক্ষণ, ওয়ার্কশিট, মৌখিক প্রশ্ন।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Improvement oriented
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
Assessment at the end of a unit or term.
<br>
<span class="feature-bn">
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
PORTFOLIO
====================== */

function portfolioTheory(){
return `

<div class="card">

<h3>📂 Portfolio Assessment</h3>

<div class="feature-card">
Collection of student's work over time.
<br>
<span class="feature-bn">
সময়ের সাথে শিক্ষার্থীর কাজের সংগ্রহ।
</span>
</div>

<div class="feature-card">
Shows learning progress.
<br>
<span class="feature-bn">
শেখার অগ্রগতি দেখায়।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Continuous evaluation
</div>

</div>

`;
}


/* ======================
OBSERVATION
====================== */

function observationTheory(){
return `

<div class="card">

<h3>👀 Observation Method</h3>

<div class="feature-card">
Teacher observes student's behavior and activities.
<br>
<span class="feature-bn">
শিক্ষক শিক্ষার্থীর আচরণ ও কার্যকলাপ পর্যবেক্ষণ করেন।
</span>
</div>

<div class="feature-card">
Useful for assessing skills and attitudes.
</div>

<div class="feature-ctet">
CTET Focus: Informal assessment
</div>

</div>

`;
}


/* ======================
CTET FOCUS
====================== */

function ctetTheory(){
return `

<div class="card">

<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
Assessment should support learning improvement.
<br>
<span class="feature-bn">
মূল্যায়ন শেখার উন্নতিতে সহায়ক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Focus on holistic development.
<br>
<span class="feature-bn">
সামগ্রিক বিকাশের উপর গুরুত্ব।
</span>
</div>

<div class="feature-ctet">
Trap: Assessment only means exams ❌
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

portfolio: portfolioTheory(),

observation: observationTheory(),

ctet: ctetTheory()

};