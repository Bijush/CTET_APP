/* CREATE TABS */

createTabs([

{ id:"inductive", icon:"🔍", label:"Inductive" },

{ id:"deductive", icon:"📐", label:"Deductive" },

{ id:"analytic", icon:"🧠", label:"Analytic" },

{ id:"problem", icon:"🧩", label:"Problem" },

{ id:"heuristic", icon:"🔎", label:"Heuristic" },

{ id:"project", icon:"📊", label:"Project" },

{ id:"playway", icon:"🎲", label:"Play Way" },

{ id:"lab", icon:"🧪", label:"Lab" },

{ id:"abl", icon:"🎯", label:"ABL" }

]);



/* ======================
INDUCTIVE
====================== */

function inductiveTheory(){
return `

<div class="card">
<h3>🔍 Inductive Method</h3>

<div class="feature-card">
From specific examples → general rule.
<br><span class="feature-bn">
নির্দিষ্ট উদাহরণ থেকে সাধারণ নিয়ম।
</span>
</div>

<div class="feature-card">
Example:  
2+4=6  
4+6=10  
Even + Even = Even
</div>

<div class="feature-ctet">
CTET Keyword: Child-centered • Discovery learning
</div>

</div>

`;
}



/* ======================
DEDUCTIVE
====================== */

function deductiveTheory(){
return `

<div class="card">
<h3>📐 Deductive Method</h3>

<div class="feature-card">
General rule → specific example.
<br><span class="feature-bn">
সাধারণ নিয়ম থেকে উদাহরণ।
</span>
</div>

<div class="feature-card">
Example:  
Area of rectangle = l × b  
Apply formula directly.
</div>

<div class="feature-ctet">
CTET Trap: Not suitable alone for primary level ❌
</div>

</div>

`;
}



/* ======================
ANALYTIC
====================== */

function analyticTheory(){
return `

<div class="card">
<h3>🧠 Analytic Method</h3>

<div class="feature-card">
Start from unknown → reach known.
<br><span class="feature-bn">
অজানা থেকে জানা দিকে অগ্রসর।
</span>
</div>

<div class="feature-card">
Used in geometry proofs.
</div>

<div class="feature-ctet">
CTET Line: Logical reasoning method
</div>

</div>

`;
}



/* ======================
PROBLEM SOLVING
====================== */

function problemTheory(){
return `

<div class="card">
<h3>🧩 Problem Solving Method</h3>

<div class="feature-card">
Students learn by solving real-life problems.
</div>

<div class="feature-card">
Steps:  
Understand → Plan → Solve → Verify
</div>

<div class="feature-ctet">
CTET Favourite Method
</div>

</div>

`;
}



/* ======================
HEURISTIC
====================== */

function heuristicTheory(){
return `

<div class="card">
<h3>🔎 Heuristic Method</h3>

<div class="feature-card">
Learning by self-discovery.
<br><span class="feature-bn">
নিজে আবিষ্কার করে শেখা।
</span>
</div>

<div class="feature-card">
Teacher gives hints, not answers.
</div>

<div class="feature-ctet">
Keyword: Inquiry method
</div>

</div>

`;
}



/* ======================
PROJECT
====================== */

function projectTheory(){
return `

<div class="card">
<h3>📊 Project Method</h3>

<div class="feature-card">
Learning through practical projects.
</div>

<div class="feature-card">
Example: Survey and create graph.
</div>

<div class="feature-ctet">
CTET Line: Learning by doing
</div>

</div>

`;
}



/* ======================
PLAYWAY
====================== */

function playwayTheory(){
return `

<div class="card">
<h3>🎲 Play Way Method</h3>

<div class="feature-card">
Learning through games and activities.
</div>

<div class="feature-card">
Example: Math puzzles, flash cards.
</div>

<div class="feature-ctet">
Best for primary classes
</div>

</div>

`;
}



/* ======================
LAB
====================== */

function labTheory(){
return `

<div class="card">
<h3>🧪 Laboratory Method</h3>

<div class="feature-card">
Hands-on learning using materials.
</div>

<div class="feature-card">
Use of math lab, models, TLM.
</div>

<div class="feature-ctet">
CTET Keyword: Activity-based learning
</div>

</div>

`;
}



/* ======================
ABL
====================== */

function ablTheory(){
return `

<div class="card">
<h3>🎯 Activity Based Learning (ABL)</h3>

<div class="feature-card">
Students actively participate in learning.
</div>

<div class="feature-card">
Focus on concept, not memorization.
</div>

<div class="feature-ctet">
Exam Trap: Lecture method ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

inductive: inductiveTheory(),
deductive: deductiveTheory(),
analytic: analyticTheory(),
problem: problemTheory(),
heuristic: heuristicTheory(),
project: projectTheory(),
playway: playwayTheory(),
lab: labTheory(),
abl: ablTheory()

};