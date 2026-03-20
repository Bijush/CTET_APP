/* CREATE TABS */

createTabs([

{ id:"inquiry", icon:"🔍", label:"Inquiry" },

{ id:"project", icon:"📘", label:"Project" },

{ id:"field", icon:"🌍", label:"Field Visit" },

{ id:"discussion", icon:"🗣", label:"Discussion" },

{ id:"ctet", icon:"🎯", label:"CTET Focus" }

]);



/* ======================
INQUIRY METHOD
====================== */

function inquiryTheory(){
return `

<div class="card">

<h3>🔍 Inquiry Method</h3>

<div class="feature-card">
Students learn by asking questions and investigating.
<br>
<span class="feature-bn">
শিক্ষার্থীরা প্রশ্ন করে ও অনুসন্ধান করে শেখে।
</span>
</div>

<div class="feature-card">
Encourages curiosity and exploration.
<br>
<span class="feature-bn">
কৌতূহল ও অনুসন্ধানকে উৎসাহিত করে।
</span>
</div>

<div class="feature-card">
Students discover knowledge through investigation.
<br>
<span class="feature-bn">
অনুসন্ধানের মাধ্যমে শিক্ষার্থীরা জ্ঞান আবিষ্কার করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Inquiry-based learning • Discovery learning
</div>

</div>

`;
}



/* ======================
PROJECT METHOD
====================== */

function projectTheory(){
return `

<div class="card">

<h3>📘 Project Method</h3>

<div class="feature-card">
Learning through real-life projects.
<br>
<span class="feature-bn">
বাস্তব জীবনের প্রকল্পের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Students work collaboratively in groups.
<br>
<span class="feature-bn">
শিক্ষার্থীরা দলগতভাবে কাজ করে।
</span>
</div>

<div class="feature-card">
Develops problem solving and creativity.
<br>
<span class="feature-bn">
সমস্যা সমাধান ও সৃজনশীলতা বাড়ায়।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Experiential learning
</div>

</div>

`;
}



/* ======================
FIELD VISIT
====================== */

function fieldTheory(){
return `

<div class="card">

<h3>🌍 Field Visit</h3>

<div class="feature-card">
Students observe environment directly.
<br>
<span class="feature-bn">
শিক্ষার্থীরা সরাসরি পরিবেশ পর্যবেক্ষণ করে।
</span>
</div>

<div class="feature-card">
Examples: Visiting farm, forest, river.
<br>
<span class="feature-bn">
উদাহরণ: খামার, বন বা নদী পরিদর্শন।
</span>
</div>

<div class="feature-card">
Provides real-life learning experiences.
<br>
<span class="feature-bn">
বাস্তব অভিজ্ঞতার মাধ্যমে শেখা হয়।
</span>
</div>

<div class="feature-ctet">
CTET Line: Learning beyond classroom
</div>

</div>

`;
}



/* ======================
DISCUSSION METHOD
====================== */

function discussionTheory(){
return `

<div class="card">

<h3>🗣 Discussion Method</h3>

<div class="feature-card">
Students share ideas and opinions.
<br>
<span class="feature-bn">
শিক্ষার্থীরা মতামত ভাগ করে।
</span>
</div>

<div class="feature-card">
Encourages participation and critical thinking.
<br>
<span class="feature-bn">
অংশগ্রহণ ও সমালোচনামূলক চিন্তা বাড়ায়।
</span>
</div>

<div class="feature-card">
Promotes collaborative learning.
<br>
<span class="feature-bn">
সহযোগিতামূলক শেখা উৎসাহিত করে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Collaborative learning
</div>

</div>

`;
}



/* ======================
CTET FOCUS
====================== */

function ctetTheory(){
return `

<div class="card">

<h3>🎯 CTET Focus</h3>

<div class="feature-card">
EVS teaching should be activity-based.
<br>
<span class="feature-bn">
EVS পড়ানো কার্যভিত্তিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Teacher acts as facilitator, not lecturer.
<br>
<span class="feature-bn">
শিক্ষক বক্তা নয়, সহায়কের ভূমিকা পালন করেন।
</span>
</div>

<div class="feature-card">
Learning should involve observation and interaction.
<br>
<span class="feature-bn">
শেখায় পর্যবেক্ষণ ও পারস্পরিক যোগাযোগ থাকা উচিত।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Only lecture method ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

inquiry: inquiryTheory(),

project: projectTheory(),

field: fieldTheory(),

discussion: discussionTheory(),

ctet: ctetTheory()

};