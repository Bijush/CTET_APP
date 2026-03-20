createTabs([
{ id:"meaning", icon:"📘", label:"অর্থ" },
{ id:"examples", icon:"📚", label:"উদাহরণ" },
{ id:"practice", icon:"✍", label:"অনুশীলন" }
]);

function meaningTheory(){
return `
<div class="card">

<h3>📘 বাগধারা</h3>

<div class="feature-card">
যেসব বাক্যাংশের অর্থ সরাসরি শব্দ থেকে বোঝা যায় না তাদের বাগধারা বলা হয়।
</div>

</div>`;
}

function examplesTheory(){
return `
<div class="card">

<div class="feature-card">
হাত গুটিয়ে বসা → কোনো কাজ না করা
</div>

<div class="feature-card">
চোখে ধুলো দেওয়া → প্রতারণা করা
</div>

<div class="feature-card">
নাক কাটা → অপমান হওয়া
</div>

</div>`;
}

function practiceTheory(){
return `
<div class="card">

<div class="feature-card">
"চোখে ধুলো দেওয়া" বাগধারার অর্থ লিখ।
</div>

<div class="feature-card">
"হাত গুটিয়ে বসা" বাগধারার অর্থ কী?
</div>

</div>`;
}

window.theoryContent={
meaning:meaningTheory(),
examples:examplesTheory(),
practice:practiceTheory()
};