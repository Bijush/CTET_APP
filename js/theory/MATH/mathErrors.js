/* CREATE TABS */

createTabs([

{ id:"common", icon:"⚠️", label:"Common" },

{ id:"number", icon:"🔢", label:"Number" },

{ id:"fraction", icon:"➗", label:"Fractions" },

{ id:"placevalue", icon:"📊", label:"Place Value" },

{ id:"language", icon:"🗣", label:"Language" },

{ id:"remedial", icon:"🛠", label:"Remedial" }

]);


/* ======================
COMMON ERRORS
====================== */

function commonTheory(){
return `

<div class="card">
<h3>⚠️ Common Errors in Mathematics</h3>

<div class="feature-card">
Errors are natural in learning.
<br><span class="feature-bn">
শেখার সময় ভুল হওয়া স্বাভাবিক।
</span>
</div>

<div class="feature-card">
Mistakes reveal thinking process.
<br><span class="feature-bn">
ভুল চিন্তার প্রক্রিয়া বোঝায়।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Error analysis + Misconception
</div>

</div>

`;
}


/* ======================
NUMBER SYSTEM
====================== */

function numberTheory(){
return `

<div class="card">
<h3>🔢 Misconceptions in Number System</h3>

<div class="feature-card">
Confusion between larger digit & larger number.
<br><span class="feature-bn">
বড় অঙ্ক মানেই বড় সংখ্যা ভাবা।
</span>
</div>

<div class="feature-card">
Example: 345 < 1000 but child may compare digits only.
</div>

<div class="feature-ctet">
CTET Trigger: Place value misunderstanding
</div>

</div>

`;
}


/* ======================
FRACTION
====================== */

function fractionTheory(){
return `

<div class="card">
<h3>➗ Misconceptions in Fractions</h3>

<div class="feature-card">
Believing 1/4 > 1/2 because 4 > 2.
<br><span class="feature-bn">
4 বড় তাই 1/4 বড় ভাবা।
</span>
</div>

<div class="feature-card">
Difficulty understanding numerator & denominator.
</div>

<div class="feature-ctet">
CTET Favourite Area
</div>

</div>

`;
}


/* ======================
PLACE VALUE
====================== */

function placevalueTheory(){
return `

<div class="card">
<h3>📊 Place Value Confusion</h3>

<div class="feature-card">
Writing 305 as 35.
<br><span class="feature-bn">
305 কে 35 লেখা।
</span>
</div>

<div class="feature-card">
Ignoring zero as placeholder.
<br><span class="feature-bn">
শূন্যের স্থানীয় মান না বোঝা।
</span>
</div>

<div class="feature-ctet">
Keyword: Place value error
</div>

</div>

`;
}


/* ======================
LANGUAGE ERROR
====================== */

function languageTheory(){
return `

<div class="card">
<h3>🗣 Word Problem Language Errors</h3>

<div class="feature-card">
Misinterpreting question language.
<br><span class="feature-bn">
প্রশ্নের ভাষা ঠিকমতো না বোঝা।
</span>
</div>

<div class="feature-card">
Difficulty in translating words to mathematical form.
</div>

<div class="feature-ctet">
CTET Focus: Language barrier in math
</div>

</div>

`;
}


/* ======================
REMEDIAL
====================== */

function remedialTheory(){
return `

<div class="card">
<h3>🛠 Remedial Teaching for Errors</h3>

<div class="feature-card">
Step 1: Diagnose error
<br><span class="feature-bn">
প্রথমে ত্রুটি নির্ণয়।
</span>
</div>

<div class="feature-card">
Step 2: Identify misconception
<br><span class="feature-bn">
ভুল ধারণা শনাক্ত।
</span>
</div>

<div class="feature-card">
Step 3: Provide targeted activity
<br><span class="feature-bn">
নির্দিষ্ট কার্যভিত্তিক শিক্ষণ।
</span>
</div>

<div class="feature-ctet">
Sequence: Diagnostic → Remedial
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

common: commonTheory(),
number: numberTheory(),
fraction: fractionTheory(),
placevalue: placevalueTheory(),
language: languageTheory(),
remedial: remedialTheory()

};