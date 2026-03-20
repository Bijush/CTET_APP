/* CREATE TABS */

createTabs([

{ id:"meaning", icon:"🌱", label:"Meaning" },

{ id:"importance", icon:"🌍", label:"Importance" },

{ id:"teacher", icon:"👩‍🏫", label:"Teacher Role" },

{ id:"ctet", icon:"🎯", label:"CTET Focus" }

]);



/* ======================
MEANING
====================== */

function meaningTheory(){
return `

<div class="card">

<h3>🌱 Environmental Sensitivity</h3>

<div class="feature-card">
Environmental sensitivity means awareness and concern for nature.
<br>
<span class="feature-bn">
পরিবেশ সম্পর্কে সচেতনতা ও দায়িত্ববোধকে পরিবেশ সংবেদনশীলতা বলা হয়।
</span>
</div>

<div class="feature-card">
It encourages respect for living beings and natural resources.
<br>
<span class="feature-bn">
জীবজগৎ ও প্রাকৃতিক সম্পদের প্রতি সম্মান গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Develops values and attitudes towards environmental protection.
<br>
<span class="feature-bn">
পরিবেশ রক্ষার প্রতি মূল্যবোধ ও মনোভাব তৈরি করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Environmental awareness • Environmental ethics
</div>

</div>

`;
}



/* ======================
IMPORTANCE
====================== */

function importanceTheory(){
return `

<div class="card">

<h3>🌍 Importance of Environmental Sensitivity</h3>

<div class="feature-card">
Helps protect nature and biodiversity.
<br>
<span class="feature-bn">
প্রকৃতি ও জীববৈচিত্র্য রক্ষা করতে সাহায্য করে।
</span>
</div>

<div class="feature-card">
Encourages sustainable lifestyle.
<br>
<span class="feature-bn">
টেকসই জীবনধারা গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Promotes responsible citizenship.
<br>
<span class="feature-bn">
দায়িত্বশীল নাগরিক তৈরি করে।
</span>
</div>

<div class="feature-ctet">
CTET Line: Protect environment for future generations
</div>

</div>

`;
}



/* ======================
TEACHER ROLE
====================== */

function teacherTheory(){
return `

<div class="card">

<h3>👩‍🏫 Role of Teacher</h3>

<div class="feature-card">
Teachers should encourage nature observation.
<br>
<span class="feature-bn">
শিক্ষককে প্রকৃতি পর্যবেক্ষণে উৎসাহিত করতে হবে।
</span>
</div>

<div class="feature-card">
Organize field trips and environmental activities.
<br>
<span class="feature-bn">
ভ্রমণ ও পরিবেশভিত্তিক কার্যক্রম আয়োজন করা।
</span>
</div>

<div class="feature-card">
Promote habits like saving water and planting trees.
<br>
<span class="feature-bn">
জল সংরক্ষণ ও বৃক্ষরোপণের অভ্যাস তৈরি করা।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Learning through real-life experiences
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

<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
Environmental education should develop values and attitudes.
<br>
<span class="feature-bn">
পরিবেশ শিক্ষা মূল্যবোধ ও মনোভাব গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Students should actively participate in environmental protection.
<br>
<span class="feature-bn">
শিক্ষার্থীদের পরিবেশ রক্ষায় সক্রিয়ভাবে অংশ নিতে হবে।
</span>
</div>

<div class="feature-card">
Learning should connect environment with daily life.
<br>
<span class="feature-bn">
পরিবেশ শিক্ষাকে দৈনন্দিন জীবনের সাথে যুক্ত করতে হবে।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Environmental education = only theoretical knowledge ❌
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

teacher: teacherTheory(),

ctet: ctetTheory()

};