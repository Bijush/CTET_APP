createTabs([
{ id:"meaning", icon:"🗣", label:"অর্থ" },
{ id:"methods", icon:"🎤", label:"পদ্ধতি" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" },
{ id:"ctet", icon:"⭐", label:"CTET ফোকাস" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>🗣 বলার দক্ষতা শেখানো</h3>

<div class="feature-card">
বলার মাধ্যমে শিক্ষার্থীরা চিন্তা প্রকাশ করে।
</div>

<div class="feature-card">
যোগাযোগ দক্ষতা উন্নত হয়।
</div>
</div>`;
}

function methodsTheory(){
return `
<div class="card">
<h3>🎤 শেখানোর পদ্ধতি</h3>

<div class="feature-card">আলোচনা</div>
<div class="feature-card">গল্প বলা</div>
<div class="feature-card">রোল প্লে</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 কার্যক্রম</h3>

<div class="feature-card">সংলাপ অনুশীলন</div>
<div class="feature-card">দলগত আলোচনা</div>
</div>`;
}

function ctetTheory(){
return `
<div class="card">
<h3>⭐ CTET ফোকাস</h3>

<div class="feature-card">
শিক্ষার্থীদের কথা বলার সুযোগ দিতে হবে।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
methods:methodsTheory(),
activities:activitiesTheory(),
ctet:ctetTheory()
};