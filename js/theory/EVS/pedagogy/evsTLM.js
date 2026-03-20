/* CREATE TABS */

createTabs([

{ id:"tlm", icon:"📚", label:"TLM" },

{ id:"types", icon:"📦", label:"Types" },

{ id:"activity", icon:"⚡", label:"Activity" },

{ id:"ctet", icon:"🎯", label:"CTET Focus" }

]);



/* ======================
TLM
====================== */

function tlmTheory(){
return `

<div class="card">

<h3>📚 Teaching Learning Materials (TLM)</h3>

<div class="feature-card">
TLM are materials used by teachers to make learning effective.
<br>
<span class="feature-bn">
শিক্ষণকে কার্যকর করতে শিক্ষক যে উপকরণ ব্যবহার করেন তাকে TLM বলে।
</span>
</div>

<div class="feature-card">
Examples: Charts, models, maps, pictures, flashcards.
<br>
<span class="feature-bn">
উদাহরণ: চার্ট, মডেল, মানচিত্র, ছবি, ফ্ল্যাশকার্ড।
</span>
</div>

<div class="feature-card">
Helps students understand concepts easily.
<br>
<span class="feature-bn">
শিক্ষার্থীদের ধারণা সহজে বুঝতে সাহায্য করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Learning aids • Teaching aids
</div>

</div>

`;
}



/* ======================
TYPES
====================== */

function typesTheory(){
return `

<div class="card">

<h3>📦 Types of TLM</h3>

<div class="feature-card">
Visual TLM → Charts, diagrams, maps.
<br>
<span class="feature-bn">
দৃশ্যমান উপকরণ → চার্ট, ডায়াগ্রাম, মানচিত্র।
</span>
</div>

<div class="feature-card">
Audio TLM → Radio, recordings.
<br>
<span class="feature-bn">
শ্রাব্য উপকরণ → রেডিও, অডিও।
</span>
</div>

<div class="feature-card">
Audio-visual → Videos, smart class.
<br>
<span class="feature-bn">
শ্রব্য-দৃশ্যমান → ভিডিও, স্মার্ট ক্লাস।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Multi-sensory learning
</div>

</div>

`;
}



/* ======================
ACTIVITY
====================== */

function activityTheory(){
return `

<div class="card">

<h3>⚡ Activity Based Learning</h3>

<div class="feature-card">
Learning through activities and participation.
<br>
<span class="feature-bn">
কার্যক্রমের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Examples: Experiments, projects, group work.
<br>
<span class="feature-bn">
উদাহরণ: পরীক্ষা, প্রকল্প, দলগত কাজ।
</span>
</div>

<div class="feature-card">
Encourages exploration and curiosity.
<br>
<span class="feature-bn">
অনুসন্ধান ও কৌতূহল বাড়ায়।
</span>
</div>

<div class="feature-ctet">
CTET Line: Learning by doing
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

<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
EVS teaching should use local materials.
<br>
<span class="feature-bn">
স্থানীয় উপকরণ ব্যবহার করা উচিত।
</span>
</div>

<div class="feature-card">
Activities should relate to real life.
<br>
<span class="feature-bn">
কার্যক্রম বাস্তব জীবনের সাথে যুক্ত হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Teacher should use different types of TLM.
<br>
<span class="feature-bn">
শিক্ষকের বিভিন্ন ধরনের TLM ব্যবহার করা উচিত।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Only textbook teaching ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

tlm: tlmTheory(),

types: typesTheory(),

activity: activityTheory(),

ctet: ctetTheory()

};