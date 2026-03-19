createTabs([
{ id:"meaning", icon:"🗣", label:"অর্থ" },
{ id:"importance", icon:"⭐", label:"গুরুত্ব" },
{ id:"development", icon:"📈", label:"উন্নয়ন" },
{ id:"activities", icon:"🎤", label:"কার্যক্রম" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>🗣 বলার দক্ষতা</h3>

<div class="feature-card">
বলার মাধ্যমে মানুষ নিজের চিন্তা ও অনুভূতি প্রকাশ করে।
</div>

<div class="feature-card">
ভাষা শিক্ষার দ্বিতীয় ধাপ হলো বলা।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Communication Skill
</div>
</div>`;
}

function importanceTheory(){
return `
<div class="card">
<h3>⭐ বলার দক্ষতার গুরুত্ব</h3>

<div class="feature-card">
যোগাযোগ দক্ষতা বৃদ্ধি করে।
</div>

<div class="feature-card">
আত্মবিশ্বাস বাড়ায়।
</div>
</div>`;
}

function developmentTheory(){
return `
<div class="card">
<h3>📈 উন্নয়ন</h3>

<div class="feature-card">
গল্প বলা।
</div>

<div class="feature-card">
আলোচনা ও প্রশ্নোত্তর।
</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎤 শ্রেণিকক্ষ কার্যক্রম</h3>

<div class="feature-card">
গল্প বলা ও আলোচনা।
</div>

<div class="feature-card">
রোল প্লে ও সংলাপ।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
development:developmentTheory(),
activities:activitiesTheory()
};