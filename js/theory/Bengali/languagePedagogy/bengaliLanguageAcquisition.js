createTabs([
{ id:"behaviorism", icon:"🔁", label:"Behaviorism" },
{ id:"innate", icon:"🧠", label:"Innate Theory" },
{ id:"interaction", icon:"🤝", label:"Interaction Theory" }
]);

function behaviorismTheory(){
return `
<div class="card">
<h3>🔁 আচরণবাদ</h3>
<div class="feature-card">
অনুশীলন ও পুনর্বলনের মাধ্যমে ভাষা শেখা হয়।
</div>
</div>`;
}

function innateTheory(){
return `
<div class="card">
<h3>🧠 সহজাত তত্ত্ব</h3>
<div class="feature-card">
নোম চমস্কির মতে ভাষা শেখার ক্ষমতা জন্মগত।
</div>
</div>`;
}

function interactionTheory(){
return `
<div class="card">
<h3>🤝 সামাজিক মিথস্ক্রিয়া</h3>
<div class="feature-card">
ভাষা শেখা সামাজিক যোগাযোগের মাধ্যমে ঘটে।
</div>
</div>`;
}

window.theoryContent={
behaviorism:behaviorismTheory(),
innate:innateTheory(),
interaction:interactionTheory()
};