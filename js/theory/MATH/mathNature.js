/* CREATE TABS */

createTabs([

{ id:"definition", icon:"📘", label:"Nature" },

{ id:"aims", icon:"🎯", label:"Aims" },

{ id:"values", icon:"💎", label:"Values" },

{ id:"correlation", icon:"🔗", label:"Correlation" },

{ id:"daily-life", icon:"🌍", label:"Daily Life" }

]);



/* ======================
DEFINITION
====================== */

function definitionTheory(){
return `

<div class="card">
<h3>📘 Nature of Mathematics</h3>

<div class="feature-card">
Mathematics is a logical, systematic and abstract discipline.
<br><span class="feature-bn">
গণিত একটি যৌক্তিক, সুশৃঙ্খল ও বিমূর্ত বিষয়।
</span>
</div>

<div class="feature-card">
It develops reasoning, critical thinking and problem-solving ability.
<br><span class="feature-bn">
এটি যুক্তি, সমালোচনামূলক চিন্তা ও সমস্যা সমাধান ক্ষমতা বৃদ্ধি করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Logical Thinking • Pattern • Reasoning
</div>

</div>

`;
}



/* ======================
AIMS
====================== */

function aimsTheory(){
return `

<div class="card">
<h3>🎯 Aims of Teaching Mathematics</h3>

<div class="feature-card">
✔ Develop logical thinking
<br><span class="feature-bn">যুক্তি শক্তি বৃদ্ধি</span>
</div>

<div class="feature-card">
✔ Develop problem-solving ability
<br><span class="feature-bn">সমস্যা সমাধান দক্ষতা</span>
</div>

<div class="feature-card">
✔ Apply mathematics in daily life
<br><span class="feature-bn">বাস্তব জীবনে প্রয়োগ</span>
</div>

<div class="feature-card">
✔ Develop accuracy and precision
<br><span class="feature-bn">সঠিকতা ও নির্ভুলতা</span>
</div>

<div class="feature-ctet">
CTET Trap: Aim ≠ Memorization ❌
</div>

</div>

`;
}



/* ======================
VALUES
====================== */

function valuesTheory(){
return `

<div class="card">
<h3>💎 Values of Mathematics</h3>

<div class="feature-card">
✔ Intellectual Value
<br><span class="feature-bn">বুদ্ধিবৃত্তিক মূল্য</span>
</div>

<div class="feature-card">
✔ Practical Value
<br><span class="feature-bn">ব্যবহারিক মূল্য</span>
</div>

<div class="feature-card">
✔ Disciplinary Value
<br><span class="feature-bn">শৃঙ্খলাগত মূল্য</span>
</div>

<div class="feature-card">
✔ Cultural Value
<br><span class="feature-bn">সাংস্কৃতিক মূল্য</span>
</div>

</div>

`;
}



/* ======================
CORRELATION
====================== */

function correlationTheory(){
return `

<div class="card">
<h3>🔗 Correlation of Mathematics</h3>

<div class="feature-card">
✔ Math with Science (Measurement, Data)
</div>

<div class="feature-card">
✔ Math with Social Science (Statistics, Graph)
</div>

<div class="feature-card">
✔ Math with Daily Life (Money, Time, Distance)
</div>

<div class="feature-ctet">
CTET Focus: Real-life connection is essential
</div>

</div>

`;
}



/* ======================
DAILY LIFE
====================== */

function dailyLifeTheory(){
return `

<div class="card">
<h3>🌍 Mathematics in Daily Life</h3>

<div class="feature-card">
✔ Budget calculation
</div>

<div class="feature-card">
✔ Time management
</div>

<div class="feature-card">
✔ Measurement in cooking & shopping
</div>

<div class="feature-card">
✔ Logical decision making
</div>

<div class="feature-ctet">
CTET Trap: Math is not only classroom subject ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

definition: definitionTheory(),
aims: aimsTheory(),
values: valuesTheory(),
correlation: correlationTheory(),
"daily-life": dailyLifeTheory()

};