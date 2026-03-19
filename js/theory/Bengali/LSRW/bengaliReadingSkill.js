createTabs([
{ id:"meaning", icon:"📖", label:"অর্থ" },
{ id:"importance", icon:"⭐", label:"গুরুত্ব" },
{ id:"types", icon:"📚", label:"পড়ার ধরন" },
{ id:"development", icon:"📈", label:"উন্নয়ন" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📖 পড়ার দক্ষতা</h3>

<div class="feature-card">
লিখিত ভাষা বোঝার ক্ষমতাকে পড়া বলা হয়।
</div>

<div class="feature-card">
পড়ার মাধ্যমে জ্ঞান বৃদ্ধি পায়।
</div>
</div>`;
}

function importanceTheory(){
return `
<div class="card">
<h3>⭐ গুরুত্ব</h3>

<div class="feature-card">
জ্ঞান ও শব্দভান্ডার বৃদ্ধি করে।
</div>

<div class="feature-card">
বোধগম্যতা উন্নত করে।
</div>
</div>`;
}

function typesTheory(){
return `
<div class="card">
<h3>📚 পড়ার ধরন</h3>

<div class="feature-card">
নীরব পাঠ।
</div>

<div class="feature-card">
উচ্চস্বরে পাঠ।
</div>
</div>`;
}

function developmentTheory(){
return `
<div class="card">
<h3>📈 উন্নয়ন</h3>

<div class="feature-card">
গল্প পড়া।
</div>

<div class="feature-card">
পাঠ বোঝার প্রশ্ন।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
types:typesTheory(),
development:developmentTheory()
};