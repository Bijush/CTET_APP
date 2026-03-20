createTabs([
{ id:"meaning", icon:"📖", label:"অর্থ" },
{ id:"types", icon:"⭐", label:"ধরন" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📖 পড়ার দক্ষতা শেখানো</h3>

<div class="feature-card">
লিখিত ভাষা বোঝার ক্ষমতাকে পড়া বলা হয়।
</div>
</div>`;
}

function typesTheory(){
return `
<div class="card">
<h3>⭐ পড়ার ধরন</h3>

<div class="feature-card">নীরব পাঠ</div>
<div class="feature-card">উচ্চস্বরে পাঠ</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 কার্যক্রম</h3>

<div class="feature-card">গল্প পড়া</div>
<div class="feature-card">পাঠ বোঝার প্রশ্ন</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
types:typesTheory(),
activities:activitiesTheory()
};