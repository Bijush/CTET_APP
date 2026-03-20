createTabs([
{ id:"meaning", icon:"✍", label:"অর্থ" },
{ id:"methods", icon:"⭐", label:"পদ্ধতি" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>✍ লেখার দক্ষতা শেখানো</h3>

<div class="feature-card">
লিখিতভাবে চিন্তা প্রকাশ করাকে লেখা বলা হয়।
</div>
</div>`;
}

function methodsTheory(){
return `
<div class="card">
<h3>⭐ পদ্ধতি</h3>

<div class="feature-card">অনুচ্ছেদ লেখা</div>
<div class="feature-card">গল্প লেখা</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 কার্যক্রম</h3>

<div class="feature-card">ডায়েরি লেখা</div>
<div class="feature-card">চিঠি লেখা</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
methods:methodsTheory(),
activities:activitiesTheory()
};