/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"causes", icon:"⚠", label:"সমস্যার কারণ" },

{ id:"methods", icon:"🛠", label:"প্রতিকার পদ্ধতি" },

{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>📘 প্রতিকারমূলক শিক্ষণ</h3>

<div class="feature-card">
শিক্ষার্থীদের শেখার সমস্যাগুলি চিহ্নিত করে তা দূর করার জন্য যে শিক্ষণ পদ্ধতি ব্যবহার করা হয় তাকে প্রতিকারমূলক শিক্ষণ বলা হয়।
</div>

<div class="feature-card">
এটি দুর্বল শিক্ষার্থীদের সাহায্য করার জন্য ব্যবহৃত হয়।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Diagnostic → Remedial
</div>

</div>

`;
}



/* ======================
সমস্যার কারণ
====================== */

function causesTheory(){
return `

<div class="card">

<h3>⚠ ভাষা শেখার সমস্যার কারণ</h3>

<div class="feature-card">
ভাষার পর্যাপ্ত অনুশীলনের অভাব।
</div>

<div class="feature-card">
ভুল উচ্চারণ বা বানান সম্পর্কে বিভ্রান্তি।
</div>

<div class="feature-card">
ভাষা পরিবেশের অভাব।
</div>

<div class="feature-card">
শিক্ষার্থীর আত্মবিশ্বাসের অভাব।
</div>

<div class="feature-ctet">
CTET ফোকাস: Learning difficulties
</div>

</div>

`;
}



/* ======================
প্রতিকার পদ্ধতি
====================== */

function methodsTheory(){
return `

<div class="card">

<h3>🛠 প্রতিকারমূলক পদ্ধতি</h3>

<div class="feature-card">
অতিরিক্ত অনুশীলন ও পুনরাবৃত্তি।
</div>

<div class="feature-card">
সহজ উদাহরণ ও কার্যভিত্তিক শিক্ষণ।
</div>

<div class="feature-card">
ব্যক্তিগত সহায়তা প্রদান।
</div>

<div class="feature-card">
গল্প, আলোচনা ও ভাষা কার্যক্রম ব্যবহার করা।
</div>

<div class="feature-ctet">
CTET লাইন: Individual attention
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
শিক্ষার্থীদের শেখার সমস্যা চিহ্নিত করা।
</div>

<div class="feature-card">
সহজ ও বোধগম্য উপায়ে পুনরায় শেখানো।
</div>

<div class="feature-card">
শিক্ষার্থীদের উৎসাহিত করা ও আত্মবিশ্বাস বাড়ানো।
</div>

<div class="feature-ctet">
CTET ফোকাস: Supportive teacher
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
প্রতিকারমূলক শিক্ষণ শিক্ষার্থীদের শেখার দুর্বলতা দূর করতে সাহায্য করে।
</div>

<div class="feature-card">
Diagnostic test-এর পরে remedial teaching দেওয়া হয়।
</div>

<div class="feature-card">
প্রতিটি শিক্ষার্থীর শেখার প্রয়োজন আলাদা হতে পারে।
</div>

<div class="feature-ctet">
Trap: Punishing students for mistakes ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),
causes: causesTheory(),
methods: methodsTheory(),
teacher: teacherTheory(),
ctet: ctetTheory()

};