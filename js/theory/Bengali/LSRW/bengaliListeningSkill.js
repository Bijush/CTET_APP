/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"👂", label:"অর্থ" },

{ id:"importance", icon:"⭐", label:"গুরুত্ব" },

{ id:"development", icon:"📈", label:"উন্নয়ন" },

{ id:"activities", icon:"🎧", label:"কার্যক্রম" },

{ id:"ctet", icon:"🎯", label:"CTET ফোকাস" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>👂 শোনার দক্ষতা</h3>

<div class="feature-card">
শোনা হলো ভাষা শেখার প্রথম ও সবচেয়ে গুরুত্বপূর্ণ ধাপ।
</div>

<div class="feature-card">
শোনার মাধ্যমে মানুষ অন্যের কথা বুঝতে পারে।
</div>

<div class="feature-card">
শিশুরা প্রথমে শুনে ভাষা শেখে।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Listening → Speaking → Reading → Writing
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

<h3>⭐ শোনার দক্ষতার গুরুত্ব</h3>

<div class="feature-card">
শোনার মাধ্যমে ভাষা বোঝার ক্ষমতা বৃদ্ধি পায়।
</div>

<div class="feature-card">
যোগাযোগ দক্ষতা উন্নত হয়।
</div>

<div class="feature-card">
সঠিক উচ্চারণ ও শব্দভান্ডার শেখা যায়।
</div>

<div class="feature-ctet">
CTET ফোকাস: Active Listening
</div>

</div>

`;
}



/* ======================
উন্নয়ন
====================== */

function developmentTheory(){
return `

<div class="card">

<h3>📈 শোনার দক্ষতার উন্নয়ন</h3>

<div class="feature-card">
গল্প শোনা।
</div>

<div class="feature-card">
কবিতা বা গান শোনা।
</div>

<div class="feature-card">
শিক্ষকের নির্দেশ মনোযোগ দিয়ে শোনা।
</div>

<div class="feature-ctet">
CTET লাইন: Listening develops comprehension
</div>

</div>

`;
}



/* ======================
কার্যক্রম
====================== */

function activitiesTheory(){
return `

<div class="card">

<h3>🎧 শ্রেণিকক্ষ কার্যক্রম</h3>

<div class="feature-card">
গল্প শুনে প্রশ্নের উত্তর দেওয়া।
</div>

<div class="feature-card">
শুনে নির্দেশ অনুসরণ করা।
</div>

<div class="feature-card">
অডিও বা গল্প শুনে আলোচনা করা।
</div>

<div class="feature-ctet">
CTET ফোকাস: Activity-based language learning
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
ভাষা শিক্ষায় শোনার দক্ষতা অত্যন্ত গুরুত্বপূর্ণ।
</div>

<div class="feature-card">
শিক্ষককে শিক্ষার্থীদের সক্রিয়ভাবে শুনতে উৎসাহিত করতে হবে।
</div>

<div class="feature-card">
শোনার মাধ্যমে ভাষা বোঝার ভিত্তি তৈরি হয়।
</div>

<div class="feature-ctet">
Trap: শুধু পড়া ও লেখা শেখানো যথেষ্ট নয় ❌
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
development: developmentTheory(),
activities: activitiesTheory(),
ctet: ctetTheory()

};