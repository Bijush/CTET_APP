createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"rules", icon:"📚", label:"নিয়ম" },
{ id:"examples", icon:"✍", label:"উদাহরণ" }
]);

function meaningTheory(){
return `
<div class="card">

<h3>📘 বাক্য সংশোধন</h3>

<div class="feature-card">
ভুল বাক্যকে সঠিক ব্যাকরণ অনুযায়ী ঠিক করাকে বাক্য সংশোধন বলা হয়।
</div>

</div>`;
}

function rulesTheory(){
return `
<div class="card">

<div class="feature-card">
সঠিক শব্দ ব্যবহার।
</div>

<div class="feature-card">
ব্যাকরণ নিয়ম মেনে চলা।
</div>

<div class="feature-card">
সঠিক ক্রিয়ার ব্যবহার।
</div>

</div>`;
}

function examplesTheory(){
return `
<div class="card">

<div class="feature-card">
ভুল: সে স্কুলে যায়তেছে  
সঠিক: সে স্কুলে যাচ্ছে
</div>

<div class="feature-card">
ভুল: আমি বই পড়তেছি  
সঠিক: আমি বই পড়ছি
</div>

</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
rules:rulesTheory(),
examples:examplesTheory()
};