/* =================================
ERIKSON DIAGRAM
Auto registry compatible
No other file change needed
================================= */

(function(){

function drawErikson(container){

container.innerHTML = `

<svg viewBox="0 0 360 1100" width="100%" height="auto">

<defs>
<filter id="glow">
<feGaussianBlur stdDeviation="4" result="blur"/>
<feMerge>
<feMergeNode in="blur"/>
<feMergeNode in="SourceGraphic"/>
</feMerge>
</filter>
</defs>

<!-- STAGE 1 -->

<rect class="stage"
data-stage="s1"
x="40" y="30"
width="280"
height="90"
rx="16"/>

<text x="60" y="60" class="title">Trust vs Mistrust</text>
<text x="60" y="82" class="sub">0–1 yrs</text>
<text x="60" y="102" class="sub">Hope</text>

<!-- STAGE 2 -->

<rect class="stage"
data-stage="s2"
x="40" y="160"
width="280"
height="90"
rx="16"/>

<text x="60" y="190" class="title">Autonomy vs Shame</text>
<text x="60" y="212" class="sub">1–3 yrs</text>
<text x="60" y="232" class="sub">Will</text>

<!-- STAGE 3 -->

<rect class="stage"
data-stage="s3"
x="40" y="290"
width="280"
height="90"
rx="16"/>

<text x="60" y="320" class="title">Initiative vs Guilt</text>
<text x="60" y="342" class="sub">3–6 yrs</text>
<text x="60" y="362" class="sub">Purpose</text>

<!-- STAGE 4 -->

<rect class="stage"
data-stage="s4"
x="40" y="420"
width="280"
height="90"
rx="16"/>

<text x="60" y="450" class="title">Industry vs Inferiority</text>
<text x="60" y="472" class="sub">6–12 yrs</text>
<text x="60" y="492" class="sub">Competence</text>

<!-- STAGE 5 -->

<rect class="stage"
data-stage="s5"
x="40" y="550"
width="280"
height="90"
rx="16"/>

<text x="60" y="580" class="title">Identity vs Role Confusion</text>
<text x="60" y="602" class="sub">12–18 yrs</text>
<text x="60" y="622" class="sub">Fidelity</text>

<!-- STAGE 6 -->

<rect class="stage"
data-stage="s6"
x="40" y="680"
width="280"
height="90"
rx="16"/>

<text x="60" y="710" class="title">Intimacy vs Isolation</text>
<text x="60" y="732" class="sub">19–40 yrs</text>
<text x="60" y="752" class="sub">Love</text>

<!-- STAGE 7 -->

<rect class="stage"
data-stage="s7"
x="40" y="810"
width="280"
height="90"
rx="16"/>

<text x="60" y="840" class="title">Generativity vs Stagnation</text>
<text x="60" y="862" class="sub">40–65 yrs</text>
<text x="60" y="882" class="sub">Care</text>

<!-- STAGE 8 -->

<rect class="stage"
data-stage="s8"
x="40" y="940"
width="280"
height="90"
rx="16"/>

<text x="60" y="970" class="title">Integrity vs Despair</text>
<text x="60" y="992" class="sub">65+ yrs</text>
<text x="60" y="1012" class="sub">Wisdom</text>

<!-- ARROWS -->

<line class="arrow" x1="180" y1="120" x2="180" y2="160"/>
<line class="arrow" x1="180" y1="250" x2="180" y2="290"/>
<line class="arrow" x1="180" y1="380" x2="180" y2="420"/>
<line class="arrow" x1="180" y1="510" x2="180" y2="550"/>
<line class="arrow" x1="180" y1="640" x2="180" y2="680"/>
<line class="arrow" x1="180" y1="770" x2="180" y2="810"/>
<line class="arrow" x1="180" y1="900" x2="180" y2="940"/>

</svg>

<style>

.stage{
fill:#e3f2fd;
stroke:#1e88e5;
stroke-width:2;
cursor:pointer;
transition:.4s;
}

.stage.active{
fill:#bbdefb;
filter:url(#glow);
}

.title{
font:bold 16px Arial;
}

.sub{
font:13px Arial;
}

.arrow{
stroke:#1e88e5;
stroke-width:3;
stroke-dasharray:8;
animation:flow 2s linear infinite;
}

@keyframes flow{
from{stroke-dashoffset:20}
to{stroke-dashoffset:0}
}

</style>

`;

/* glow animation */

const stages = container.querySelectorAll(".stage");
let i = 0;

function glow(){

stages.forEach(s=>s.classList.remove("active"));
stages[i].classList.add("active");

i++;
if(i>=stages.length) i=0;

}

glow();
setInterval(glow,1800);

/* click popup */

stages.forEach(stage=>{

stage.onclick = ()=>{
const type = stage.dataset.stage;
openStagePopup(type);
};

});

}

function openStagePopup(type){

let content = "";

if(type === "s1"){
content = `
<h3>👶 Trust vs Mistrust</h3>
<b>Virtue:</b> Hope<br>
<b>Example:</b> Responsive caregiving builds trust.<br>
<span>যত্নশীল পরিচর্যা আস্থা তৈরি করে।</span>
`;
}

else if(type === "s2"){
content = `
<h3>🚶 Autonomy vs Shame</h3>
<b>Virtue:</b> Will<br>
<b>Example:</b> Allowing independence builds autonomy.<br>
<span>স্বাধীনতা দিলে স্বায়ত্তশাসন গড়ে ওঠে।</span>
`;
}

else if(type === "s3"){
content = `
<h3>🧒 Initiative vs Guilt</h3>
<b>Virtue:</b> Purpose<br>
<b>Example:</b> Encouraging action builds initiative.<br>
<span>উৎসাহ দিলে উদ্যোগ বাড়ে।</span>
`;
}

else if(type === "s4"){
content = `
<h3>🏫 Industry vs Inferiority</h3>
<b>Virtue:</b> Competence<br>
<b>Example:</b> School success builds competence.<br>
<span>বিদ্যালয়ের সাফল্য দক্ষতা তৈরি করে।</span>
<br><br>
🔥 CTET Most Asked
`;
}

else if(type === "s5"){
content = `
<h3>🧑 Identity vs Role Confusion</h3>
<b>Virtue:</b> Fidelity<br>
<b>Example:</b> Career exploration forms identity.<br>
<span>পেশা খোঁজা পরিচয় গঠন করে।</span>
`;
}

else if(type === "s6"){
content = `
<h3>💑 Intimacy vs Isolation</h3>
<b>Virtue:</b> Love<br>
<b>Example:</b> Deep relationships build intimacy.<br>
<span>ঘনিষ্ঠ সম্পর্ক প্রেম তৈরি করে।</span>
`;
}

else if(type === "s7"){
content = `
<h3>👨‍👩‍👧 Generativity vs Stagnation</h3>
<b>Virtue:</b> Care<br>
<b>Example:</b> Guiding next generation builds care.<br>
<span>পরবর্তী প্রজন্মকে পথ দেখানো যত্ন প্রকাশ করে।</span>
`;
}

else if(type === "s8"){
content = `
<h3>👴 Integrity vs Despair</h3>
<b>Virtue:</b> Wisdom<br>
<b>Example:</b> Life satisfaction builds integrity.<br>
<span>জীবনে সন্তুষ্টি অখণ্ডতা তৈরি করে।</span>
`;
}

const popup =
  document.createElement("div");

popup.className="stagePopup";

popup.innerHTML=`
  <div class="stagePopupCard">
    <span class="closePopup">✖</span>
    ${content}
  </div>
`;

document.body.appendChild(popup);

popup.onclick = e=>{
  if(e.target===popup)
    popup.remove();
};

popup
 .querySelector(".closePopup")
 .onclick=()=>popup.remove();

}

/* =================================
AUTO LOAD
================================= */

function autoLoad(){

const registryBox =
document.querySelector('[data-diagram="erikson"]');

if(registryBox){
drawErikson(registryBox);
return;
}

const old =
document.getElementById("diagramContainer");

if(old){
drawErikson(old);
}

}

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",autoLoad);
}else{
autoLoad();
}

/* =================================
REGISTER
================================= */

if(window.registerDiagram){
registerDiagram("erikson", drawErikson);
}

})();