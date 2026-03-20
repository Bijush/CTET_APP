/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

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

<h3>📘 ভাষা শিক্ষণের মূলনীতি</h3>

<div class="feature-card">
ভাষা শিক্ষণের জন্য কিছু মৌলিক নীতি অনুসরণ করা হয়।
</div>

<div class="feature-card">
এই নীতিগুলি ভাষা শেখাকে সহজ ও কার্যকর করে।
</div>

<div class="feature-card">
শিক্ষার্থীর অভিজ্ঞতা ও প্রয়োজনের উপর ভিত্তি করে ভাষা শেখানো উচিত।
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

<h3>⭐ ভাষা শিক্ষণের প্রধান মূলনীতি</h3>

<div class="feature-card">
সহজ থেকে কঠিনের দিকে অগ্রসর হওয়া।
</div>

<div class="feature-card">
পরিচিত থেকে অপরিচিতের দিকে শেখানো।
</div>

<div class="feature-card">
শোনা → বলা → পড়া → লেখা ক্রম অনুসরণ করা।
</div>

<div class="feature-card">
কার্যভিত্তিক ও অভিজ্ঞতাভিত্তিক শিক্ষণ।
</div>

<div class="feature-ctet">
CTET ফোকাস: LSRW sequence
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

<h3>🏫 শ্রেণিকক্ষে প্রয়োগ</h3>

<div class="feature-card">
গল্প, আলোচনা ও দলগত কাজের মাধ্যমে ভাষা শেখানো।
</div>

<div class="feature-card">
শিক্ষার্থীদের সক্রিয় অংশগ্রহণ নিশ্চিত করা।
</div>

<div class="feature-card">
বাস্তব জীবনের উদাহরণ ব্যবহার করা।
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
শিক্ষককে নির্দেশক ও সহায়ক হিসেবে কাজ করতে হবে।
</div>

<div class="feature-card">
শিক্ষার্থীদের কথা বলার সুযোগ দিতে হবে।
</div>

<div class="feature-card">
শিক্ষার্থীদের ভুলকে শেখার অংশ হিসেবে গ্রহণ করতে হবে।
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
ভাষা শিক্ষণ শিক্ষার্থী-কেন্দ্রিক হওয়া উচিত।
</div>

<div class="feature-card">
যোগাযোগ দক্ষতার উপর গুরুত্ব দিতে হবে।
</div>

<div class="feature-card">
শুধু ব্যাকরণ শেখানো ভাষা শিক্ষণের উদ্দেশ্য নয়।
</div>

<div class="feature-ctet">
Trap: Language teaching = Grammar teaching ❌
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