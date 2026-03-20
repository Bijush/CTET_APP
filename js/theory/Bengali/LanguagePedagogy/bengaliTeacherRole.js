/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"roles", icon:"👩‍🏫", label:"ভূমিকা" },

{ id:"classroom", icon:"🏫", label:"শ্রেণিকক্ষ কাজ" },

{ id:"support", icon:"🤝", label:"সহায়তা" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>📘 ভাষা শ্রেণিকক্ষে শিক্ষকের ভূমিকা</h3>

<div class="feature-card">
ভাষা শিক্ষণে শিক্ষক একটি গুরুত্বপূর্ণ ভূমিকা পালন করেন।
</div>

<div class="feature-card">
শিক্ষক শিক্ষার্থীদের ভাষা শেখার পরিবেশ তৈরি করেন।
</div>

<div class="feature-card">
শিক্ষক শিক্ষার্থীদের শেখার প্রক্রিয়ায় সহায়তা করেন।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Teacher as facilitator
</div>

</div>

`;
}



/* ======================
ভূমিকা
====================== */

function rolesTheory(){
return `

<div class="card">

<h3>👩‍🏫 শিক্ষকের প্রধান ভূমিকা</h3>

<div class="feature-card">
শিক্ষার্থীদের ভাষা ব্যবহারের সুযোগ দেওয়া।
</div>

<div class="feature-card">
শোনা, বলা, পড়া ও লেখার দক্ষতা উন্নত করা।
</div>

<div class="feature-card">
শিক্ষার্থীদের প্রশ্ন করতে উৎসাহিত করা।
</div>

<div class="feature-card">
সৃজনশীল কার্যক্রমের মাধ্যমে ভাষা শেখানো।
</div>

<div class="feature-ctet">
CTET ফোকাস: Student participation
</div>

</div>

`;
}



/* ======================
শ্রেণিকক্ষ কাজ
====================== */

function classroomTheory(){
return `

<div class="card">

<h3>🏫 শ্রেণিকক্ষে শিক্ষকের কাজ</h3>

<div class="feature-card">
গল্প বলা ও গল্প শোনানো।
</div>

<div class="feature-card">
আলোচনা ও দলগত কাজ পরিচালনা করা।
</div>

<div class="feature-card">
ভাষা শেখার জন্য কার্যভিত্তিক পদ্ধতি ব্যবহার করা।
</div>

<div class="feature-ctet">
CTET লাইন: Activity-based language learning
</div>

</div>

`;
}



/* ======================
সহায়তা
====================== */

function supportTheory(){
return `

<div class="card">

<h3>🤝 শিক্ষার্থীদের সহায়তা</h3>

<div class="feature-card">
শিক্ষার্থীদের ভুলকে শেখার অংশ হিসেবে গ্রহণ করা।
</div>

<div class="feature-card">
শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি করা।
</div>

<div class="feature-card">
প্রত্যেক শিক্ষার্থীর ভাষাগত পার্থক্যকে সম্মান করা।
</div>

<div class="feature-ctet">
CTET ফোকাস: Inclusive classroom
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
শিক্ষককে নির্দেশক ও সহায়কের ভূমিকা পালন করতে হবে।
</div>

<div class="feature-card">
ভাষা শিক্ষণে শিক্ষার্থীদের সক্রিয় অংশগ্রহণ নিশ্চিত করতে হবে।
</div>

<div class="feature-card">
শুধু বক্তৃতা দিয়ে ভাষা শেখানো কার্যকর নয়।
</div>

<div class="feature-ctet">
Trap: Teacher talks, students listen only ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),
roles: rolesTheory(),
classroom: classroomTheory(),
support: supportTheory(),
ctet: ctetTheory()

};