/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"🧠", label:"Meaning" },

{ id:"principles", icon:"⭐", label:"Principles" },

{ id:"evs", icon:"🌿", label:"EVS Use" },

{ id:"ctet", icon:"🎯", label:"CTET Focus" }

]);


/* ======================
MEANING
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>🧠 Constructivism</h3>

<div class="feature-card">
Constructivism means learners actively construct knowledge.
<br>
<span class="feature-bn">
শিক্ষার্থীরা নিজেরাই জ্ঞান তৈরি করে।
</span>
</div>

<div class="feature-card">
Learning happens through experience and interaction.
<br>
<span class="feature-bn">
অভিজ্ঞতা ও পারস্পরিক যোগাযোগের মাধ্যমে শেখা হয়।
</span>
</div>

<div class="feature-card">
Students are active participants in learning.
<br>
<span class="feature-bn">
শিক্ষার্থীরা শেখার সক্রিয় অংশগ্রহণকারী।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Child-centered learning
</div>

</div>

`;
}


/* ======================
PRINCIPLES
====================== */

function principlesTheory(){
return `

<div class="card">

<h3>⭐ Principles of Constructivism</h3>

<div class="feature-card">
Learning is active and participatory.
<br>
<span class="feature-bn">
শেখা সক্রিয় ও অংশগ্রহণমূলক।
</span>
</div>

<div class="feature-card">
Knowledge is built through experience.
<br>
<span class="feature-bn">
অভিজ্ঞতার মাধ্যমে জ্ঞান তৈরি হয়।
</span>
</div>

<div class="feature-card">
Teacher acts as facilitator.
<br>
<span class="feature-bn">
শিক্ষক সহায়কের ভূমিকা পালন করেন।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Inquiry learning
</div>

</div>

`;
}


/* ======================
EVS APPLICATION
====================== */

function evsTheory(){
return `

<div class="card">

<h3>🌿 Constructivism in EVS</h3>

<div class="feature-card">
Children explore environment through activities.
<br>
<span class="feature-bn">
শিশুরা কার্যক্রমের মাধ্যমে পরিবেশ অন্বেষণ করে।
</span>
</div>

<div class="feature-card">
Learning through observation, discussion and projects.
<br>
<span class="feature-bn">
পর্যবেক্ষণ, আলোচনা ও প্রকল্পের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Students connect classroom learning with real life.
<br>
<span class="feature-bn">
শ্রেণিকক্ষের শেখাকে বাস্তব জীবনের সাথে যুক্ত করে।
</span>
</div>

<div class="feature-ctet">
CTET Line: EVS should be activity-based
</div>

</div>

`;
}


/* ======================
CTET TRAPS
====================== */

function ctetTheory(){
return `

<div class="card">

<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
Teacher should guide students instead of giving direct answers.
<br>
<span class="feature-bn">
শিক্ষক সরাসরি উত্তর না দিয়ে শিক্ষার্থীদের পথ দেখান।
</span>
</div>

<div class="feature-card">
Learning should be discovery oriented.
<br>
<span class="feature-bn">
শেখা অনুসন্ধানভিত্তিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Students learn through activities and interaction.
</div>

<div class="feature-ctet">
CTET Trap: Teacher explains everything ❌
</div>

</div>

`;
}


/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),

principles: principlesTheory(),

evs: evsTheory(),

ctet: ctetTheory()

};