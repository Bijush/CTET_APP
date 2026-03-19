/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"importance", icon:"⭐", label:"গুরুত্ব" },

{ id:"examples", icon:"📚", label:"উদাহরণ" },

{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>📘 পাঠ্যক্রম জুড়ে ভাষা</h3>

<div class="feature-card">
Language Across Curriculum অর্থ হলো সব বিষয় শেখার ক্ষেত্রে ভাষার ব্যবহার।
</div>

<div class="feature-card">
শুধু ভাষা বিষয় নয়, সব বিষয় শেখার জন্য ভাষা গুরুত্বপূর্ণ।
</div>

<div class="feature-card">
ভাষা জ্ঞান অর্জনের প্রধান মাধ্যম।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Language as a tool of learning
</div>

</div>

`;
}



/* ======================
গুরুত্ব
====================== */

function importanceTheory(){
return `

<div class="card">

<h3>⭐ গুরুত্ব</h3>

<div class="feature-card">
সব বিষয় শেখার জন্য ভাষা অপরিহার্য।
</div>

<div class="feature-card">
ভাষা বোঝার মাধ্যমে শিক্ষার্থীরা ধারণা পরিষ্কারভাবে বুঝতে পারে।
</div>

<div class="feature-card">
ভাষা চিন্তা ও যোগাযোগ দক্ষতা উন্নত করে।
</div>

<div class="feature-ctet">
CTET ফোকাস: Language supports learning
</div>

</div>

`;
}



/* ======================
উদাহরণ
====================== */

function examplesTheory(){
return `

<div class="card">

<h3>📚 উদাহরণ</h3>

<div class="feature-card">
বিজ্ঞান শেখার সময় ব্যাখ্যা ও আলোচনা করার জন্য ভাষা ব্যবহৃত হয়।
</div>

<div class="feature-card">
গণিতে প্রশ্ন পড়া ও সমাধান বোঝার জন্য ভাষা গুরুত্বপূর্ণ।
</div>

<div class="feature-card">
সমাজবিজ্ঞানে আলোচনা ও ব্যাখ্যার জন্য ভাষা প্রয়োজন।
</div>

<div class="feature-ctet">
CTET লাইন: Language helps understanding in all subjects
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
সব বিষয় শেখানোর সময় ভাষা ব্যবহারের সুযোগ তৈরি করা।
</div>

<div class="feature-card">
শিক্ষার্থীদের আলোচনা ও প্রশ্ন করতে উৎসাহিত করা।
</div>

<div class="feature-card">
সহজ ও বোধগম্য ভাষা ব্যবহার করা।
</div>

<div class="feature-ctet">
CTET ফোকাস: Language-rich classroom
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
ভাষা সব বিষয় শেখার একটি গুরুত্বপূর্ণ মাধ্যম।
</div>

<div class="feature-card">
শিক্ষার্থীদের ভাষা ব্যবহার করে চিন্তা ও ব্যাখ্যা করতে উৎসাহিত করতে হবে।
</div>

<div class="feature-card">
শুধু ভাষা ক্লাসে নয়, সব ক্লাসে ভাষা ব্যবহার করা উচিত।
</div>

<div class="feature-ctet">
Trap: Language learning only in language class ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),
importance: importanceTheory(),
examples: examplesTheory(),
teacher: teacherTheory(),
ctet: ctetTheory()

};