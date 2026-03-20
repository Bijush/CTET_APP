/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"🎲", label:"অর্থ" },

{ id:"importance", icon:"⭐", label:"গুরুত্ব" },

{ id:"examples", icon:"🎯", label:"উদাহরণ" },

{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" },

{ id:"ctet", icon:"📘", label:"CTET ফোকাস" }

]);


/* ======================
অর্থ
====================== */

function meaningTheory(){
return `
<div class="card">

<h3>🎲 ভাষা খেলা</h3>

<div class="feature-card">
ভাষা শেখার জন্য খেলা বা মজার কার্যক্রম ব্যবহার করাকে ভাষা খেলা বলা হয়।
</div>

<div class="feature-card">
এর মাধ্যমে শিক্ষার্থীরা আনন্দের সাথে ভাষা শেখে।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Learning through play
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

<h3>⭐ ভাষা খেলার গুরুত্ব</h3>

<div class="feature-card">
শিক্ষার্থীদের আগ্রহ ও অংশগ্রহণ বাড়ায়।
</div>

<div class="feature-card">
শব্দভান্ডার ও ভাষা দক্ষতা উন্নত করে।
</div>

<div class="feature-card">
শেখাকে আনন্দদায়ক করে তোলে।
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

<h3>🎯 উদাহরণ</h3>

<div class="feature-card">
শব্দ খেলা (Word Game)
</div>

<div class="feature-card">
ধাঁধা বা রিডল।
</div>

<div class="feature-card">
গল্প তৈরি করার খেলা।
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
শিক্ষার্থীদের ভাষা খেলার মাধ্যমে শেখার সুযোগ দিতে হবে।
</div>

<div class="feature-card">
দলগত কার্যক্রমের মাধ্যমে ভাষা শেখাতে হবে।
</div>

<div class="feature-ctet">
CTET ফোকাস: Activity-based learning
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

<h3>📘 CTET ফোকাস</h3>

<div class="feature-card">
ভাষা খেলা শিশুদের ভাষা দক্ষতা উন্নত করতে সাহায্য করে।
</div>

<div class="feature-card">
শেখাকে আনন্দময় করা ভাষা শিক্ষণের গুরুত্বপূর্ণ অংশ।
</div>

<div class="feature-ctet">
Trap: Language learning only through textbook ❌
</div>

</div>
`;
}


window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
examples:examplesTheory(),
teacher:teacherTheory(),
ctet:ctetTheory()
};