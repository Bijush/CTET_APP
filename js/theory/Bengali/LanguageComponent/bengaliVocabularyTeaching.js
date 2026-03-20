createTabs([
{ id:"meaning", icon:"📚", label:"অর্থ" },
{ id:"methods", icon:"⭐", label:"পদ্ধতি" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📚 শব্দভান্ডার শিক্ষণ</h3>

<div class="feature-card">
শব্দভান্ডার ভাষা শিক্ষার গুরুত্বপূর্ণ অংশ।
</div>
</div>`;
}

function methodsTheory(){
return `
<div class="card">
<h3>⭐ পদ্ধতি</h3>

<div class="feature-card">ছবি ব্যবহার</div>
<div class="feature-card">গল্পের মাধ্যমে শব্দ শেখানো</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 কার্যক্রম</h3>

<div class="feature-card">শব্দ খেলা</div>
<div class="feature-card">সমার্থক শব্দ শেখানো</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
methods:methodsTheory(),
activities:activitiesTheory()
};