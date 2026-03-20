/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"📘", label:"অর্থ" },

{ id:"objectives", icon:"🎯", label:"উদ্দেশ্য" },

{ id:"skills", icon:"🗣", label:"ভাষা দক্ষতা" },

{ id:"development", icon:"📈", label:"ব্যক্তিত্ব বিকাশ" },

{ id:"ctet", icon:"⭐", label:"CTET ফোকাস" }

]);



/* ======================
অর্থ
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>📘 ভাষা শিক্ষণের উদ্দেশ্য</h3>

<div class="feature-card">
ভাষা শিক্ষণের মাধ্যমে শিক্ষার্থীদের ভাষা ব্যবহারের দক্ষতা উন্নত করা হয়।
</div>

<div class="feature-card">
ভাষা শেখা মানুষের চিন্তা ও যোগাযোগের বিকাশে সাহায্য করে।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Communication Skill
</div>

</div>

`;
}



/* ======================
উদ্দেশ্য
====================== */

function objectivesTheory(){
return `

<div class="card">

<h3>🎯 ভাষা শিক্ষণের প্রধান উদ্দেশ্য</h3>

<div class="feature-card">
শিক্ষার্থীদের সঠিকভাবে ভাষা ব্যবহার করতে শেখানো।
</div>

<div class="feature-card">
চিন্তা ও অনুভূতি স্পষ্টভাবে প্রকাশ করতে সক্ষম করা।
</div>

<div class="feature-card">
ভাষার মাধ্যমে জ্ঞান অর্জন ও যোগাযোগ দক্ষতা বৃদ্ধি করা।
</div>

<div class="feature-ctet">
CTET ফোকাস: Functional language use
</div>

</div>

`;
}



/* ======================
ভাষা দক্ষতা
====================== */

function skillsTheory(){
return `

<div class="card">

<h3>🗣 ভাষা দক্ষতার বিকাশ</h3>

<div class="feature-card">
শোনা (Listening)
</div>

<div class="feature-card">
বলা (Speaking)
</div>

<div class="feature-card">
পড়া (Reading)
</div>

<div class="feature-card">
লেখা (Writing)
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: LSRW
</div>

</div>

`;
}



/* ======================
ব্যক্তিত্ব বিকাশ
====================== */

function developmentTheory(){
return `

<div class="card">

<h3>📈 ব্যক্তিত্ব বিকাশ</h3>

<div class="feature-card">
ভাষা শিক্ষণ শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি করে।
</div>

<div class="feature-card">
সমাজের সাথে যোগাযোগের ক্ষমতা উন্নত করে।
</div>

<div class="feature-card">
সৃজনশীল চিন্তা ও কল্পনাশক্তি বিকাশ করে।
</div>

<div class="feature-ctet">
CTET ফোকাস: Holistic development
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

<h3>⭐ CTET ফোকাস</h3>

<div class="feature-card">
ভাষা শিক্ষণের উদ্দেশ্য শুধুমাত্র ব্যাকরণ শেখানো নয়।
</div>

<div class="feature-card">
যোগাযোগ দক্ষতা ও ভাষা ব্যবহারের উপর গুরুত্ব দিতে হবে।
</div>

<div class="feature-card">
শিক্ষার্থীদের বাস্তব জীবনে ভাষা ব্যবহারের দক্ষতা গড়ে তুলতে হবে।
</div>

<div class="feature-ctet">
Trap: Language learning = Grammar learning ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

meaning: meaningTheory(),
objectives: objectivesTheory(),
skills: skillsTheory(),
development: developmentTheory(),
ctet: ctetTheory()

};