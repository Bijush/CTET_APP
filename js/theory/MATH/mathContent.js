/* CREATE TABS */

createTabs([

{ id:"number", icon:"🔢", label:"Number" },

{ id:"fraction", icon:"➗", label:"Fractions" },

{ id:"algebra", icon:"🧮", label:"Algebra" },

{ id:"geometry", icon:"📐", label:"Geometry" },

{ id:"mensuration", icon:"📏", label:"Mensuration" },

{ id:"data", icon:"📊", label:"Data" },

{ id:"word", icon:"📝", label:"Word Problems" }

]);


/* ======================
NUMBER SYSTEM
====================== */

function numberTheory(){
return `

<div class="card">
<h3>🔢 Number System Pedagogy</h3>

<div class="feature-card">
Develop number sense before formal algorithms.
<br><span class="feature-bn">
অ্যালগরিদম শেখানোর আগে সংখ্যা বোধ গড়ে তুলতে হবে।
</span>
</div>

<div class="feature-card">
Use number line, beads, bundles, abacus.
<br><span class="feature-bn">
সংখ্যারেখা, গুটি, বান্ডিল, অ্যাবাকাস ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Concept > Procedure
</div>

</div>

`;
}


/* ======================
FRACTIONS
====================== */

function fractionTheory(){
return `

<div class="card">
<h3>➗ Fractions Pedagogy</h3>

<div class="feature-card">
Start with concrete objects (paper folding, pizza model).
<br><span class="feature-bn">
বাস্তব উপকরণ দিয়ে শুরু করতে হবে।
</span>
</div>

<div class="feature-card">
Explain part-whole relationship clearly.
<br><span class="feature-bn">
অংশ-সমগ্র সম্পর্ক বোঝানো জরুরি।
</span>
</div>

<div class="feature-ctet">
CTET Favourite Topic
</div>

</div>

`;
}


/* ======================
ALGEBRA READINESS
====================== */

function algebraTheory(){
return `

<div class="card">
<h3>🧮 Algebra Readiness</h3>

<div class="feature-card">
Focus on patterns and number relationships.
<br><span class="feature-bn">
প্যাটার্ন ও সংখ্যার সম্পর্ক বোঝানো।
</span>
</div>

<div class="feature-card">
Introduce simple unknowns through activities.
<br><span class="feature-bn">
কার্যভিত্তিকভাবে অজানা সংখ্যা পরিচয় করানো।
</span>
</div>

<div class="feature-ctet">
Keyword: Pattern recognition
</div>

</div>

`;
}


/* ======================
GEOMETRY
====================== */

function geometryTheory(){
return `

<div class="card">
<h3>📐 Geometry Teaching</h3>

<div class="feature-card">
Begin with shapes in real life.
<br><span class="feature-bn">
বাস্তব জীবনের আকার দিয়ে শুরু।
</span>
</div>

<div class="feature-card">
Use models and drawing activities.
<br><span class="feature-bn">
মডেল ও আঁকার কার্যক্রম ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Visualization skill
</div>

</div>

`;
}


/* ======================
MENSURATION
====================== */

function mensurationTheory(){
return `

<div class="card">
<h3>📏 Mensuration Teaching</h3>

<div class="feature-card">
Teach measurement using real objects.
<br><span class="feature-bn">
বাস্তব বস্তু দিয়ে পরিমাপ শেখানো।
</span>
</div>

<div class="feature-card">
Start with non-standard units first.
<br><span class="feature-bn">
প্রথমে অ-মানক একক ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Line: Concrete → Abstract
</div>

</div>

`;
}


/* ======================
DATA HANDLING
====================== */

function dataTheory(){
return `

<div class="card">
<h3>📊 Data Handling Teaching</h3>

<div class="feature-card">
Collect real classroom data.
<br><span class="feature-bn">
শ্রেণিকক্ষের বাস্তব তথ্য সংগ্রহ।
</span>
</div>

<div class="feature-card">
Create pictograph and bar graph.
<br><span class="feature-bn">
চিত্রলেখ ও বার গ্রাফ তৈরি।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Activity-based learning
</div>

</div>

`;
}


/* ======================
WORD PROBLEMS
====================== */

function wordTheory(){
return `

<div class="card">
<h3>📝 Word Problem Strategy</h3>

<div class="feature-card">
Teach language comprehension first.
<br><span class="feature-bn">
প্রথমে ভাষা বোঝার দক্ষতা গড়ে তুলতে হবে।
</span>
</div>

<div class="feature-card">
Use step approach: Read → Plan → Solve → Check.
<br><span class="feature-bn">
পড়ো → পরিকল্পনা করো → সমাধান করো → যাচাই করো।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Direct formula application ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

number: numberTheory(),
fraction: fractionTheory(),
algebra: algebraTheory(),
geometry: geometryTheory(),
mensuration: mensurationTheory(),
data: dataTheory(),
word: wordTheory()

};