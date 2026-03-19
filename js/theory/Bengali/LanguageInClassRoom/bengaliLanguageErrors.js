createTabs([
{ id:"types", icon:"⚠", label:"ত্রুটির ধরন" },
{ id:"causes", icon:"📌", label:"কারণ" },
{ id:"remedy", icon:"🛠", label:"সমাধান" }
]);

function typesTheory(){
return `
<div class="card">
<h3>⚠ ভাষাগত ত্রুটি</h3>
<div class="feature-card">
উচ্চারণ, বানান ও ব্যাকরণে ভুল হতে পারে।
</div>
</div>`;
}

function causesTheory(){
return `
<div class="card">
<h3>📌 কারণ</h3>
<div class="feature-card">
ভাষা পরিবেশের অভাব বা ভুল অনুশীলন।
</div>
</div>`;
}

function remedyTheory(){
return `
<div class="card">
<h3>🛠 সংশোধন</h3>
<div class="feature-card">
সঠিক উদাহরণ ও অনুশীলনের মাধ্যমে সংশোধন করা।
</div>
</div>`;
}

window.theoryContent={
types:typesTheory(),
causes:causesTheory(),
remedy:remedyTheory()
};