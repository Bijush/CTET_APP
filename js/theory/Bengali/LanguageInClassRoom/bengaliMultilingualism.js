createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"importance", icon:"⭐", label:"গুরুত্ব" },
{ id:"teacher", icon:"👩‍🏫", label:"শিক্ষকের ভূমিকা" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📘 বহুভাষিকতা</h3>

<div class="feature-card">
একাধিক ভাষা ব্যবহার করার ক্ষমতাকে বহুভাষিকতা বলা হয়।
</div>

<div class="feature-card">
ভারত একটি বহুভাষিক দেশ।
</div>

<div class="feature-ctet">
CTET কীওয়ার্ড: Multilingual Classroom
</div>
</div>`;
}

function importanceTheory(){
return `
<div class="card">
<h3>⭐ গুরুত্ব</h3>

<div class="feature-card">
বিভিন্ন ভাষার মাধ্যমে সংস্কৃতি ও জ্ঞান বিনিময় হয়।
</div>

<div class="feature-card">
শিক্ষার্থীদের ভাষা দক্ষতা উন্নত হয়।
</div>
</div>`;
}

function teacherTheory(){
return `
<div class="card">
<h3>👩‍🏫 শিক্ষকের ভূমিকা</h3>

<div class="feature-card">
শিক্ষার্থীর মাতৃভাষাকে সম্মান করতে হবে।
</div>

<div class="feature-card">
বিভিন্ন ভাষার ব্যবহারকে উৎসাহিত করতে হবে।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
importance:importanceTheory(),
teacher:teacherTheory()
};