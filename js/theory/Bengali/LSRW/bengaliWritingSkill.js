createTabs([
{ id:"meaning", icon:"✍", label:"অর্থ" },
{ id:"importance", icon:"⭐", label:"গুরুত্ব" },
{ id:"development", icon:"📈", label:"উন্নয়ন" },
{ id:"activities", icon:"📝", label:"কার্যক্রম" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>✍ লেখার দক্ষতা</h3>

<div class="feature-card">
লেখা হলো নিজের চিন্তা লিখিতভাবে প্রকাশ করা।
</div>

<div class="feature-card">
এটি ভাষার গুরুত্বপূর্ণ দক্ষতা।
</div>
</div>`;
}

function importanceTheory(){
return `
<div class="card">
<h3>⭐ গুরুত্ব</h3>

<div class="feature-card">
চিন্তা প্রকাশের মাধ্যম।
</div>

<div class="feature-card">
ভাষার দক্ষতা উন্নত করে।
</div>
</div>`;
}

function developmentTheory(){
return `
<div class="card">
<h3>📈 উন্নয়ন</h3>

<div class="feature-card">
অনুচ্ছেদ লেখা।
</div>

<div class="feature-card">
গল্প লেখা।
</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>📝 কার্যক্রম</h3>

<div class="feature-card">
ডায়েরি লেখা।
</div>

<div class="feature-card">
চিঠি লেখা।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
development:developmentTheory(),
activities:activitiesTheory()
};