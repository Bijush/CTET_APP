/* CREATE TABS */

createTabs([

{ id:"wahida", icon:"👩‍✈️", label:"Wahida" },

{ id:"amrita", icon:"🌳", label:"Amrita" },

{ id:"chipko", icon:"🌲", label:"Chipko" },

{ id:"inclusion", icon:"🤝", label:"Inclusion" }

]);



/* ======================
WAHIDA PRISM
====================== */

function wahidaTheory(){
return `

<div class="card">

<h3>👩‍✈️ Wahida Prism (Gender Equality)</h3>

<div class="feature-card">
Wahida became a Navy doctor.<br>
<span class="feature-bn">
ওয়াহিদা একজন নৌবাহিনীর ডাক্তার হন।
</span>
</div>

<div class="feature-card">
Breaks gender stereotypes.<br>
<span class="feature-bn">
লিঙ্গভিত্তিক ধারণা ভেঙে দেয়।
</span>
</div>

<div class="feature-card">
Message: Girls can achieve equal success in all professions.<br>
<span class="feature-bn">
বার্তা: মেয়েরা সব পেশায় সমান সাফল্য অর্জন করতে পারে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Gender equality • Equal opportunity
</div>

</div>

`;
}



/* ======================
AMRITA DEVI
====================== */

function amritaTheory(){
return `

<div class="card">

<h3>🌳 The Story of Amrita (Bishnoi Community)</h3>

<div class="feature-card">
Amrita Devi sacrificed her life to protect trees.<br>
<span class="feature-bn">
অমৃতা দেবী গাছ রক্ষার জন্য প্রাণ দিয়েছিলেন।
</span>
</div>

<div class="feature-card">
Shows courage and environmental values.<br>
<span class="feature-bn">
সাহস ও পরিবেশ সচেতনতার উদাহরণ।
</span>
</div>

<div class="feature-card">
Women played key role in forest protection.<br>
<span class="feature-bn">
বন রক্ষায় নারীদের গুরুত্বপূর্ণ ভূমিকা।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Environmental sensitivity • Women empowerment
</div>

</div>

`;
}



/* ======================
CHIPKO MOVEMENT
====================== */

function chipkoTheory(){
return `

<div class="card">

<h3>🌲 Chipko Movement</h3>

<div class="feature-card">
Women hugged trees to prevent cutting.<br>
<span class="feature-bn">
গাছ কাটার বিরুদ্ধে মহিলারা গাছ জড়িয়ে ধরেছিলেন।
</span>
</div>

<div class="feature-card">
Promoted environmental awareness.<br>
<span class="feature-bn">
পরিবেশ সচেতনতা বৃদ্ধি করে।
</span>
</div>

<div class="feature-card">
Shows collective community effort.
</div>

<div class="feature-ctet">
CTET Focus: Community participation • Gender role in society
</div>

</div>

`;
}



/* ======================
INCLUSION
====================== */

function inclusionTheory(){
return `

<div class="card">

<h3>🤝 Inclusion & Equal Opportunity</h3>

<div class="feature-card">
All children deserve equal education.<br>
<span class="feature-bn">
সব শিশু সমান শিক্ষার অধিকারী।
</span>
</div>

<div class="feature-card">
No discrimination based on gender.<br>
<span class="feature-bn">
লিঙ্গের ভিত্তিতে বৈষম্য নয়।
</span>
</div>

<div class="feature-card">
Respect diversity in classroom.<br>
<span class="feature-bn">
শ্রেণিকক্ষে বৈচিত্র্যকে সম্মান করা।
</span>
</div>

<div class="feature-ctet">
CTET Trap: “Only boys are better in science” ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

wahida: wahidaTheory(),

amrita: amritaTheory(),

chipko: chipkoTheory(),

inclusion: inclusionTheory()

};