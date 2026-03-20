createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"approach", icon:"⭐", label:"পদ্ধতি" },
{ id:"activities", icon:"🎯", label:"কার্যক্রম" },
{ id:"ctet", icon:"📚", label:"CTET ফোকাস" }
]);

function meaningTheory(){
return `
<div class="card">
<h3>📘 ব্যাকরণ শিক্ষণ</h3>

<div class="feature-card">
ভাষার নিয়ম বোঝানোকে ব্যাকরণ শিক্ষণ বলা হয়।
</div>
</div>`;
}

function approachTheory(){
return `
<div class="card">
<h3>⭐ পদ্ধতি</h3>

<div class="feature-card">Inductive Method</div>
<div class="feature-card">Deductive Method</div>
</div>`;
}

function activitiesTheory(){
return `
<div class="card">
<h3>🎯 কার্যক্রম</h3>

<div class="feature-card">বাক্য গঠন</div>
<div class="feature-card">শব্দ শ্রেণিবিভাগ</div>
</div>`;
}

function ctetTheory(){
return `
<div class="card">
<h3>📚 CTET ফোকাস</h3>

<div class="feature-card">
ব্যাকরণ যোগাযোগের সাথে যুক্ত করে শেখাতে হবে।
</div>
</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
approach:approachTheory(),
activities:activitiesTheory(),
ctet:ctetTheory()
};