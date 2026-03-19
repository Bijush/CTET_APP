createTabs([
{ id:"formative", icon:"📘", label:"Formative" },
{ id:"summative", icon:"📝", label:"Summative" },
{ id:"tools", icon:"📊", label:"Tools" }
]);

function formativeTheory(){
return `
<div class="card">
<h3>📘 গঠনমূলক মূল্যায়ন</h3>
<div class="feature-card">
শেখার সময় ধারাবাহিক মূল্যায়ন।
</div>
</div>`;
}

function summativeTheory(){
return `
<div class="card">
<h3>📝 সামষ্টিক মূল্যায়ন</h3>
<div class="feature-card">
পাঠ শেষে মূল্যায়ন।
</div>
</div>`;
}

function toolsTheory(){
return `
<div class="card">
<h3>📊 মূল্যায়নের উপায়</h3>
<div class="feature-card">
মৌখিক প্রশ্ন, লেখা, পাঠ বোঝা।
</div>
</div>`;
}

window.theoryContent={
formative:formativeTheory(),
summative:summativeTheory(),
tools:toolsTheory()
};