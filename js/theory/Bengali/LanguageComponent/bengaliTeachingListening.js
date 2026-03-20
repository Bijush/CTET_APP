createTabs([
{ id:"meaning", icon:"👂", label:"অর্থ" },
{ id:"methods", icon:"🎧", label:"পদ্ধতি" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" },
{ id:"ctet", icon:"⭐", label:"CTET ফোকাস" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>👂 শোনার দক্ষতা শেখানো</h3>

<div class="feature-card">
শোনা ভাষা শিক্ষার প্রথম ধাপ।
</div>

<div class="feature-card">
শিশুরা প্রথমে শুনে ভাষা বোঝে।
</div>

<div class="feature-ctet">
CTET Keyword: Listening → Speaking → Reading → Writing
</div>
</div>`;
}

function methodsTheory(){
return `
<div class="card">
<h3>🎧 শেখানোর পদ্ধতি</h3>

<div class="feature-card">গল্প শোনানো</div>
<div class="feature-card">অডিও শোনানো</div>
<div class="feature-card">নির্দেশ শুনে কাজ করা</div>

</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 শ্রেণিকক্ষ কার্যক্রম</h3>

<div class="feature-card">গল্প শুনে প্রশ্নের উত্তর</div>
<div class="feature-card">নির্দেশ শুনে কাজ</div>
</div>`;
}

function ctetTheory(){
return `
<div class="card">
<h3>⭐ CTET ফোকাস</h3>

<div class="feature-card">
Active listening উন্নত করা গুরুত্বপূর্ণ।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
methods:methodsTheory(),
activities:activitiesTheory(),
ctet:ctetTheory()
};