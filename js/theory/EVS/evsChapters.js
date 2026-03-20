/* CREATE TABS */

createTabs([

{ id:"class3", icon:"📘", label:"Class 3" },

{ id:"class4", icon:"📗", label:"Class 4" },

{ id:"class5", icon:"📕", label:"Class 5" }

]);



/* ======================
CLASS 3
====================== */

function class3Theory(){
return `

<div class="card">

<h3>📘 Class 3 EVS – Important Chapters</h3>

<div class="feature-card">
✔ Poonam’s Day Out<br>
<span class="feature-bn">
Living condition sensitivity
</span>
</div>

<div class="feature-card">
✔ Families Can Be Different<br>
<span class="feature-bn">
Inclusion & diversity
</span>
</div>

<div class="feature-card">
✔ Water O Water<br>
<span class="feature-bn">
Water conservation
</span>
</div>

<div class="feature-ctet">
CTET Focus: Social awareness • Environmental sensitivity
</div>

</div>

`;
}



/* ======================
CLASS 4
====================== */

function class4Theory(){
return `

<div class="card">

<h3>📗 Class 4 EVS – High Priority</h3>

<div class="feature-card">
✔ Wahida Prism<br>
<span class="feature-bn">
Gender equality
</span>
</div>

<div class="feature-card">
✔ Omana’s Journey<br>
<span class="feature-bn">
Migration & livelihood
</span>
</div>

<div class="feature-card">
✔ A River’s Tale<br>
<span class="feature-bn">
Pollution awareness
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Social justice • Environmental awareness
</div>

</div>

`;
}



/* ======================
CLASS 5
====================== */

function class5Theory(){
return `

<div class="card">

<h3>📕 Class 5 EVS – MOST IMPORTANT</h3>

<div class="feature-card">
✔ A Shelter So High<br>
<span class="feature-bn">
Adaptation to climate
</span>
</div>

<div class="feature-card">
✔ No Place for Us?<br>
<span class="feature-bn">
Displacement & empathy
</span>
</div>

<div class="feature-card">
✔ Blow Hot, Blow Cold<br>
<span class="feature-bn">
Scientific inquiry
</span>
</div>

<div class="feature-card">
✔ Seeds and Seeds<br>
<span class="feature-bn">
Biodiversity
</span>
</div>

<div class="feature-ctet">
CTET Focus: Concept understanding • Inquiry learning
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

class3: class3Theory(),

class4: class4Theory(),

class5: class5Theory()

};