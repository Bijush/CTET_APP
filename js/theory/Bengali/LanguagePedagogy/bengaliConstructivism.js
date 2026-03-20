/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"🧠", label:"অর্থ" },

{ id:"principles", icon:"⭐", label:"মূলনীতি" },

{ id:"classroom", icon:"🏫", label:"শ্রেণিকক্ষ প্রয়োগ" },

{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);


/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>🧠 ভাষা শিক্ষায় গঠনবাদ</h3>

<div class="feature-card">
গঠনবাদ অনুযায়ী শিক্ষার্থীরা নিজেরাই জ্ঞান নির্মাণ করে।
</div>

<div class="feature-card">
ভাষা শেখা হয় অভিজ্ঞতা ও সামাজিক যোগাযোগের মাধ্যমে।
</div>

<div class="feature-card">
শিক্ষার্থীরা সক্রিয়ভাবে শেখার প্রক্রিয়ায় অংশগ্রহণ করে।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Child-centered learning
</div>

</div>

`;
}



/* ======================
মূলনীতি
====================== */

function principlesTheory(){
return `

<div class="card">

<h3>⭐ গঠনবাদের মূলনীতি</h3>

<div class="feature-card">
শিক্ষার্থীরা নিজের অভিজ্ঞতা থেকে জ্ঞান গঠন করে।
</div>

<div class="feature-card">
শেখা একটি সক্রিয় প্রক্রিয়া।
</div>

<div class="feature-card">
ভাষা শেখা সামাজিক যোগাযোগের মাধ্যমে ঘটে।
</div>

<div class="feature-ctet">
CTET ফোকাস: Learning by interaction
</div>

</div>

`;
}



/* ======================
শ্রেণিকক্ষ প্রয়োগ
====================== */

function classroomTheory(){
return `

<div class="card">

<h3>🏫 শ্রেণিকক্ষে গঠনবাদের প্রয়োগ</h3>

<div class="feature-card">
গল্প আলোচনা ও দলগত কাজের মাধ্যমে ভাষা শেখানো।
</div>

<div class="feature-card">
শিক্ষার্থীদের প্রশ্ন করতে উৎসাহিত করা।
</div>

<div class="feature-card">
বাস্তব জীবনের অভিজ্ঞতার সাথে ভাষা শেখা যুক্ত করা।
</div>

<div class="feature-ctet">
CTET লাইন: Activity-based language learning
</div>

</div>

`;
}



/* ======================
শিক্ষকের ভূমিকা
====================== */

function teacherTheory(){
return `

<div class="card">

<h3>👩‍🏫 শিক্ষকের ভূমিকা</h3>

<div class="feature-card">
শিক্ষক নির্দেশক ও সহায়কের ভূমিকা পালন করেন।
</div>

<div class="feature-card">
শিক্ষার্থীদের স্বাধীনভাবে শেখার সুযোগ দিতে হয়।
</div>

<div class="feature-card">
আলোচনা ও সহযোগী শিক্ষাকে উৎসাহিত করতে হয়।
</div>

<div class="feature-ctet">
CTET ফোকাস: Teacher as facilitator
</div>

</div>

`;
}



/* ======================
CTET
====================== */

function ctetTheory(){
return `

<div class="card">

<h3>🎯 CTET ফোকাস</h3>

<div class="feature-card">
ভাষা শিক্ষণ কার্যভিত্তিক ও শিক্ষার্থী-কেন্দ্রিক হওয়া উচিত।
</div>

<div class="feature-card">
শিক্ষার্থীদের অভিজ্ঞতার উপর ভিত্তি করে শেখা হওয়া উচিত।
</div>

<div class="feature-card">
শুধু মুখস্থ শেখানো গঠনবাদী পদ্ধতি নয়।
</div>

<div class="feature-ctet">
Trap: Teacher explains everything ❌
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
classroom: classroomTheory(),
teacher: teacherTheory(),
ctet: ctetTheory()

};