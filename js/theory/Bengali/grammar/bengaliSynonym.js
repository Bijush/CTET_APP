createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"examples", icon:"📚", label:"উদাহরণ" },
{ id:"practice", icon:"✍", label:"অনুশীলন" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📘 সমার্থক শব্দ</h3>

<div class="feature-card">
যেসব শব্দের অর্থ একই বা কাছাকাছি হয় তাদের সমার্থক শব্দ বলা হয়।
</div>

<div class="feature-card">
উদাহরণ:
<br>সুখ – আনন্দ
<br>দুঃখ – বেদনা
<br>পৃথিবী – ধরণী
</div>

</div>`;
}

function examplesTheory(){
return `
<div class="card">
<h3>📚 আরও উদাহরণ</h3>

<div class="feature-card">আকাশ – গগন</div>
<div class="feature-card">সূর্য – রবি</div>
<div class="feature-card">নদী – তটিনী</div>

</div>`;
}

function practiceTheory(){
return `
<div class="card">
<h3>✍ অনুশীলন</h3>

<div class="feature-card">
"খুশি" শব্দের সমার্থক শব্দ কী?
</div>

<div class="feature-card">
"বন" শব্দের সমার্থক শব্দ লিখ।
</div>

</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
examples:examplesTheory(),
practice:practiceTheory()
};