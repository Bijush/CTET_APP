/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"importance", icon:"⭐", label:"গুরুত্ব" },

{ id:"methods", icon:"📝", label:"পদ্ধতি" },

{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);


/* ======================
অর্থ
====================== */

function meaningTheory(){
return `
<div class="card">

<h3>📘 ধারাবাহিক মূল্যায়ন</h3>

<div class="feature-card">
শিক্ষার্থীর শেখার অগ্রগতি নিয়মিতভাবে পর্যবেক্ষণ করাকে ধারাবাহিক মূল্যায়ন বলা হয়।
</div>

<div class="feature-card">
এটি শেখার সময়ই মূল্যায়ন করা হয়।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Continuous assessment
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
শিক্ষার্থীর শেখার অগ্রগতি বোঝা যায়।
</div>

<div class="feature-card">
দুর্বলতা চিহ্নিত করা সহজ হয়।
</div>

<div class="feature-card">
শেখার উন্নতি করা সম্ভব হয়।
</div>

</div>
`;
}


/* ======================
পদ্ধতি
====================== */

function methodsTheory(){
return `
<div class="card">

<h3>📝 মূল্যায়নের পদ্ধতি</h3>

<div class="feature-card">
মৌখিক প্রশ্ন।
</div>

<div class="feature-card">
পাঠ বোঝা পরীক্ষা।
</div>

<div class="feature-card">
লেখার কাজ ও প্রকল্প।
</div>

<div class="feature-ctet">
CTET লাইন: Formative assessment
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
শিক্ষার্থীর শেখার অগ্রগতি পর্যবেক্ষণ করা।
</div>

<div class="feature-card">
দুর্বল শিক্ষার্থীদের সহায়তা করা।
</div>

<div class="feature-ctet">
CTET ফোকাস: Diagnostic + Remedial
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
মূল্যায়নের উদ্দেশ্য শুধু নম্বর দেওয়া নয়।
</div>

<div class="feature-card">
শেখার উন্নতি করা মূল্যায়নের প্রধান উদ্দেশ্য।
</div>

<div class="feature-ctet">
Trap: Evaluation = Exam only ❌
</div>

</div>
`;
}


window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
methods:methodsTheory(),
teacher:teacherTheory(),
ctet:ctetTheory()
};