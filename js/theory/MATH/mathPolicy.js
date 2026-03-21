/* CREATE TABS */

createTabs([

{ id:"ncf", icon:"📘", label:"NCF 2005" },

{ id:"nep", icon:"🚀", label:"NEP 2020" },

{ id:"rte", icon:"⚖", label:"RTE 2009" },

{ id:"curriculum", icon:"📚", label:"Curriculum" },

{ id:"textbook", icon:"📖", label:"Textbook" }

]);


/* ======================
NCF 2005
====================== */

function ncfTheory(){
return `

<div class="card">
<h3>📘 NCF 2005 – Mathematics Position Paper</h3>

<div class="feature-card">
Mathematics should be activity-based and child-centered.
<br><span class="feature-bn">
গণিত কার্যভিত্তিক ও শিশুকেন্দ্রিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Focus on understanding, not rote learning.
<br><span class="feature-bn">
মুখস্থ নয়, বোঝাপড়ার উপর জোর।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Constructivist approach
</div>

</div>

`;
}



/* ======================
NEP 2020
====================== */

function nepTheory(){
return `

<div class="card">
<h3>🚀 NEP 2020 – Mathematics Education</h3>

<div class="feature-card">
Emphasis on foundational numeracy (FLN).
<br><span class="feature-bn">
ভিত্তিমূলক গণনা দক্ষতার উপর জোর।
</span>
</div>

<div class="feature-card">
Competency-based and experiential learning.
<br><span class="feature-bn">
দক্ষতাভিত্তিক ও অভিজ্ঞতাভিত্তিক শিক্ষণ।
</span>
</div>

<div class="feature-ctet">
Keyword: FLN + 5+3+3+4 Structure
</div>

</div>

`;
}



/* ======================
RTE 2009
====================== */

function rteTheory(){
return `

<div class="card">
<h3>⚖ RTE Act 2009 & Mathematics</h3>

<div class="feature-card">
Free & compulsory education (6–14 years).
<br><span class="feature-bn">
৬–১৪ বছর বয়স পর্যন্ত বিনামূল্যে শিক্ষা।
</span>
</div>

<div class="feature-card">
Child-friendly & stress-free environment.
<br><span class="feature-bn">
শিশুবান্ধব ও চাপমুক্ত পরিবেশ।
</span>
</div>

<div class="feature-ctet">
CTET Line: Equity + Access
</div>

</div>

`;
}



/* ======================
CURRICULUM
====================== */

function curriculumTheory(){
return `

<div class="card">
<h3>📚 Mathematics Curriculum</h3>

<div class="feature-card">
Curriculum defines what to teach and why.
<br><span class="feature-bn">
কী শেখানো হবে এবং কেন শেখানো হবে তা নির্ধারণ করে পাঠ্যক্রম।
</span>
</div>

<div class="feature-card">
Spiral and progressive structure.
<br><span class="feature-bn">
ধাপে ধাপে ও পুনরাবৃত্তিমূলক গঠন।
</span>
</div>

<div class="feature-card">
Balanced between Concept, Skill and Application.
<br><span class="feature-bn">
ধারণা, দক্ষতা ও প্রয়োগের মধ্যে ভারসাম্য।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Curriculum ≠ Syllabus  
Curriculum = Goals + Content + Method + Evaluation
</div>

</div>

`;
}



/* ======================
TEXTBOOK ANALYSIS
====================== */

function textbookTheory(){
return `

<div class="card">
<h3>📖 Mathematics Textbook Analysis</h3>

<div class="feature-card">
Should include real-life contexts.
<br><span class="feature-bn">
বাস্তব জীবনের প্রেক্ষাপট থাকা উচিত।
</span>
</div>

<div class="feature-card">
Encourage activity and exploration.
<br><span class="feature-bn">
কার্যভিত্তিক ও অনুসন্ধানমূলক কাজ থাকা উচিত।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Child-centered textbook
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

ncf: ncfTheory(),
nep: nepTheory(),
rte: rteTheory(),
curriculum: curriculumTheory(),
textbook: textbookTheory()

};