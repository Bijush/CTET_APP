createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"examples", icon:"📚", label:"উদাহরণ" },
{ id:"practice", icon:"✍", label:"অনুশীলন" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📘 বিপরীত শব্দ</h3>

<div class="feature-card">
যেসব শব্দের অর্থ একে অপরের বিপরীত তাদের বিপরীত শব্দ বলা হয়।
</div>

</div>`;
}

function examplesTheory(){
return `
<div class="card">

<div class="feature-card">দিন – রাত</div>
<div class="feature-card">সুখ – দুঃখ</div>
<div class="feature-card">বড় – ছোট</div>

</div>`;
}

function practiceTheory(){
return `
<div class="card">

<div class="feature-card">
"উচ্চ" শব্দের বিপরীত শব্দ কী?
</div>

<div class="feature-card">
"সত্য" শব্দের বিপরীত শব্দ লিখ।
</div>

</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
examples:examplesTheory(),
practice:practiceTheory()
};