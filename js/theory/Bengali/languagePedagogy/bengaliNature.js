/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"features", icon:"⭐", label:"বৈশিষ্ট্য" },

{ id:"functions", icon:"🗣", label:"কার্য" },

{ id:"learning", icon:"👶", label:"ভাষা অর্জন" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" },
{ id:"bangla", icon:"📝", label:"Pedagogy MCQ", type:"mcq" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>📘 ভাষার প্রকৃতি</h3>

<div class="feature-card">
ভাষা হলো মানুষের মধ্যে যোগাযোগের একটি মাধ্যম।
</div>

<div class="feature-card">
ভাষার মাধ্যমে মানুষ নিজের চিন্তা, অনুভূতি ও ধারণা প্রকাশ করে।
</div>

<div class="feature-card">
ভাষা সামাজিক যোগাযোগের মাধ্যমে বিকশিত হয়।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: যোগাযোগ • প্রকাশ
</div>

</div>

`;
}



/* ======================
বৈশিষ্ট্য
====================== */

function featuresTheory(){
return `

<div class="card">

<h3>⭐ ভাষার বৈশিষ্ট্য</h3>

<div class="feature-card">
ভাষা পরিবর্তনশীল এবং সময়ের সাথে পরিবর্তিত হয়।
</div>

<div class="feature-card">
ভাষার নিজস্ব নিয়ম ও গঠন রয়েছে।
</div>

<div class="feature-card">
ভাষা সামাজিক ও সাংস্কৃতিক পরিবেশের সাথে সম্পর্কিত।
</div>

<div class="feature-ctet">
CTET ফোকাস: সমাজের সাথে ভাষার পরিবর্তন
</div>

</div>

`;
}



/* ======================
কার্য
====================== */

function functionsTheory(){
return `

<div class="card">

<h3>🗣 ভাষার কার্য</h3>

<div class="feature-card">
মানুষের মধ্যে যোগাযোগ স্থাপন করা।
</div>

<div class="feature-card">
চিন্তা ও অনুভূতি প্রকাশ করা।
</div>

<div class="feature-card">
জ্ঞান অর্জন ও আদান-প্রদান করা।
</div>

<div class="feature-ctet">
CTET লাইন: ভাষা হলো যোগাযোগের প্রধান মাধ্যম
</div>

</div>

`;
}



/* ======================
ভাষা অর্জন
====================== */

function learningTheory(){
return `

<div class="card">

<h3>👶 ভাষা অর্জন</h3>

<div class="feature-card">
শিশুরা স্বাভাবিকভাবে পরিবেশের মাধ্যমে ভাষা শেখে।
</div>

<div class="feature-card">
প্রথমে শোনা ও বলা শেখে।
</div>

<div class="feature-card">
এরপর ধীরে ধীরে পড়া ও লেখা শেখে।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: LSRW (শোনা • বলা • পড়া • লেখা)
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
ভাষা শিক্ষণ অর্থপূর্ণ ও প্রাসঙ্গিক হওয়া উচিত।
</div>

<div class="feature-card">
শিক্ষার্থীদের যোগাযোগ দক্ষতার উপর গুরুত্ব দিতে হবে।
</div>

<div class="feature-card">
শুধু ব্যাকরণ শেখানো ভাষা শিক্ষণের উদ্দেশ্য নয়।
</div>

<div class="feature-ctet">
Trap: ভাষা শিক্ষা = শুধু ব্যাকরণ ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),
features: featuresTheory(),
functions: functionsTheory(),
learning: learningTheory(),
ctet: ctetTheory()

};