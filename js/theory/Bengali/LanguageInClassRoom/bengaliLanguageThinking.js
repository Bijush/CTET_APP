createTabs([
{ id:"relation", icon:"🧠", label:"সম্পর্ক" },
{ id:"development", icon:"👶", label:"বিকাশ" }
]);

function relationTheory(){
return `
<div class="card">
<h3>🧠 ভাষা ও চিন্তা</h3>
<div class="feature-card">
ভাষা মানুষের চিন্তাভাবনা প্রকাশের মাধ্যম।
</div>
</div>`;
}

function developmentTheory(){
return `
<div class="card">
<h3>👶 চিন্তার বিকাশ</h3>
<div class="feature-card">
ভাষা শেখার সাথে চিন্তার বিকাশ ঘটে।
</div>
</div>`;
}

window.theoryContent={
relation:relationTheory(),
development:developmentTheory()
};