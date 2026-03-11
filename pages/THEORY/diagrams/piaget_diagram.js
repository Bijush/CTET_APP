/* =================================
PIAGET DIAGRAM
Auto registry compatible
No other file change needed
================================= */

(function(){

function drawPiaget(container){

container.innerHTML = `

<svg viewBox="0 0 360 620" width="100%" height="auto">

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
data-stage="sensorimotor"
x="40" y="30"
width="280"
height="90"
rx="16"/>

<text x="60" y="60" class="title">Sensorimotor</text>
<text x="60" y="82" class="sub">0–2 yrs</text>
<text x="60" y="102" class="sub">Object Permanence</text>

<!-- STAGE 2 -->

<rect class="stage"
data-stage="pre"
x="40" y="160"
width="280"
height="90"
rx="16"/>

<text x="60" y="190" class="title">Pre-Operational</text>
<text x="60" y="212" class="sub">2–7 yrs</text>
<text x="60" y="232" class="sub">Egocentrism</text>

<!-- STAGE 3 -->

<rect class="stage"
data-stage="concrete"
x="40" y="290"
width="280"
height="90"
rx="16"/>

<text x="60" y="320" class="title">Concrete</text>
<text x="60" y="342" class="sub">7–11 yrs</text>
<text x="60" y="362" class="sub">Conservation</text>

<!-- STAGE 4 -->

<rect class="stage"
data-stage="formal"
x="40" y="420"
width="280"
height="90"
rx="16"/>

<text x="60" y="450" class="title">Formal</text>
<text x="60" y="472" class="sub">11+ yrs</text>
<text x="60" y="492" class="sub">Abstract Thinking</text>

<!-- ARROWS -->

<line class="arrow" x1="180" y1="120" x2="180" y2="160"/>
<line class="arrow" x1="180" y1="250" x2="180" y2="290"/>
<line class="arrow" x1="180" y1="380" x2="180" y2="420"/>

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

/* ===== glow animation ===== */

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

/* ===== click popup ===== */

stages.forEach(stage=>{

stage.onclick = ()=>{
const type = stage.dataset.stage;
openStagePopup(type);
};

});

}

/* =================================
POPUP
================================= */

window.openStagePopup = function(type){

  let content = "";

if(type === "sensorimotor"){

content = `

<h3>🧠 Sensorimotor Stage</h3>

<b>Age:</b> 0–2 years

<br><br>

<b>📘 Description:</b><br>

This is the first stage of Piaget’s cognitive  
development where infants learn through  
sensory experiences and motor actions like  
touching, seeing, grasping, sucking and moving.

Thinking is action-based — not symbolic.

<br><br>

<b>🔑 Key Features:</b><br>

• Learning by senses & actions<br>
• Object permanence develops<br>
• Goal-directed behaviour begins<br>
• Imitation starts<br>
• Trial & error learning<br>
• Circular reactions occur<br>
• No symbolic thinking<br>
• No logical reasoning

<br><br>

<b>🧩 Sub-Stages:</b><br>

1️⃣ Reflex stage → Sucking, grasping<br>
2️⃣ Primary circular reaction<br>
3️⃣ Secondary circular reaction<br>
4️⃣ Coordination stage<br>
5️⃣ Tertiary circular reaction<br>
6️⃣ Mental representation

<br><br>

<b>🧪 Classic Experiment:</b><br>

Hidden Toy Experiment →  
Baby searches object even when unseen,  
showing object permanence.

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Baby sucks thumb repeatedly  
→ Reflex / circular reaction

<br>

2️⃣ Baby shakes rattle again & again  
→ Primary circular reaction

<br>

3️⃣ Baby throws toy repeatedly  
→ Secondary circular reaction

<br>

4️⃣ Baby searches hidden ball  
→ Object permanence

<br>

5️⃣ Baby pulls cloth to reach toy  
→ Goal-directed behaviour

<br>

6️⃣ Baby imitates clapping or smiling  
→ Imitation learning

<br>

7️⃣ Baby presses sound toy purposely  
→ Cause-effect understanding

<br>

8️⃣ Baby tries different ways to grab toy  
→ Trial & error exploration

<br><br>

<b>🎯 CTET Focus:</b><br>

• Object permanence concept<br>
• Hidden toy experiment<br>
• Sub-stage identification<br>
• Circular reaction examples

<br><br>

<b>⚠️ Examiner Trap:</b><br>

“Symbolic thinking present” ❌<br>
Correct → Develops in Pre-operational stage.

<br><br>

<b>🧠 Memory Trick:</b><br>

<b>O-G-I-C</b><br>

O → Object permanence<br>
G → Goal behaviour<br>
I → Imitation<br>
C → Circular reaction

`;
}

  else if(type === "pre"){

content = `

<h3>🎭 Pre-Operational Stage</h3>

<b>Age:</b> 2–7 years

<br><br>

<b>📘 Description:</b><br>

At this stage children develop symbolic  
thinking, imagination and language skills,  
but logical reasoning is still weak.

Thinking is intuitive and perception-based,  
not logical or reversible.

<br><br>

<b>🔑 Key Features:</b><br>

• Symbolic thinking develops<br>
• Rapid language growth<br>
• Egocentrism present<br>
• Animism belief<br>
• Centration thinking<br>
• Lack of conservation<br>
• Irreversibility of thought<br>
• Transductive reasoning

<br><br>

<b>🧪 Classic Experiments:</b><br>

• Three Mountain Task → Egocentrism<br>
• Conservation Task → Failure<br>
• Tall vs flat glass judgment

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Child thinks moon follows him  
→ Egocentrism

<br>

2️⃣ Child says “Doll is crying”  
→ Animism

<br>

3️⃣ Child says tall glass has more water  
→ Lack of conservation

<br>

4️⃣ Stick used as horse in play  
→ Symbolic thinking

<br>

5️⃣ Child covers eyes & thinks others can’t see him  
→ Egocentrism

<br>

6️⃣ Child believes sun sleeps at night  
→ Animism

<br>

7️⃣ Child focuses only on glass height  
→ Centration

<br>

8️⃣ Child cannot mentally reverse actions  
→ Irreversibility

<br><br>

<b>🎯 CTET Focus:</b><br>

• Egocentrism identification<br>
• Animism examples<br>
• Conservation failure<br>
• Centration concept<br>
• Three mountain task

<br><br>

<b>⚠️ Examiner Trap:</b><br>

“Child shows logical conservation” ❌<br>
Correct → Develops in Concrete stage.

<br><br>

<b>🧠 Memory Trick:</b><br>

<b>E-A-C-I</b><br>

E → Egocentrism<br>
A → Animism<br>
C → Centration<br>
I → Irreversibility

`;
}

  else if(type === "concrete"){

content = `

<h3>🧠 Concrete Operational Stage</h3>

<b>Age:</b> 7–11 years

<br><br>

<b>📘 Description:</b><br>

At this stage children develop  
logical thinking, but only about  
real (concrete) objects and events.

Abstract reasoning is still limited.

<br><br>

<b>🔑 Key Features:</b><br>

• Logical thinking develops<br>
• Conservation ability<br>
• Classification skill<br>
• Seriation ability<br>
• Reversibility thinking<br>
• Decentration develops<br>
• Problem solving improves

<br><br>

<b>🧪 Classic Experiments:</b><br>

• Conservation of liquid<br>
• Conservation of number<br>
• Stick length ordering task

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Child says water equal in tall & flat glass  
→ Conservation

<br>

2️⃣ Child arranges sticks small → big  
→ Seriation

<br>

3️⃣ Child groups fruits vs vegetables  
→ Classification

<br>

4️⃣ Child understands 5+3 = 8 & 8−3 = 5  
→ Reversibility

<br>

5️⃣ Child compares weight correctly  
→ Logical reasoning

<br>

6️⃣ Child counts beads correctly after spreading  
→ Number conservation

<br>

7️⃣ Child considers height + width both  
→ Decentration

<br>

8️⃣ Child solves real life math problems  
→ Concrete logic

<br><br>

<b>🎯 CTET Focus:</b><br>

• Conservation tasks<br>
• Logical reasoning examples<br>
• Classification & seriation<br>
• Stage identification questions

`;
}

  else if(type === "formal"){

content = `

<h3>🧠 Formal Operational Stage</h3>

<b>Age:</b> 11+ years

<br><br>

<b>📘 Description:</b><br>

This is the highest stage of cognitive development  
where adolescents develop the ability to think  
abstractly, logically and hypothetically.

They can reason beyond concrete experiences.

<br><br>

<b>🔑 Key Features:</b><br>

• Abstract thinking develops<br>
• Hypothetical reasoning<br>
• Deductive logic<br>
• Scientific thinking<br>
• Problem solving ability<br>
• Future planning<br>
• Metacognition (thinking about thinking)

<br><br>

<b>🧪 Classic Experiment:</b><br>

Pendulum Task → Child tests which factor  
(length, weight, force) affects speed.

Shows scientific hypothesis testing.

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Solving algebra equations  
→ Abstract reasoning

<br>

2️⃣ Thinking about democracy & justice  
→ Abstract concepts

<br>

3️⃣ Predicting “What if gravity disappears?”  
→ Hypothetical thinking

<br>

4️⃣ Conducting science experiments  
→ Scientific reasoning

<br>

5️⃣ Planning career goals  
→ Future planning

<br>

6️⃣ Debating moral dilemmas  
→ Logical argument

<br>

7️⃣ Using formulas in physics  
→ Abstract application

<br>

8️⃣ Thinking about own thinking process  
→ Metacognition

<br><br>

<b>🎯 CTET Focus:</b><br>

• Abstract reasoning questions<br>
• Hypothesis examples<br>
• Scientific thinking tasks<br>
• Stage identification MCQ

`;
}

  const popup =
    document.createElement("div");

  popup.className = "stagePopup";

  popup.innerHTML = `
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
    .onclick = ()=>popup.remove();

}

/* =================================
AUTO LOAD (fallback)
================================= */

function autoLoad(){

/* registry system */

const registryBox =
document.querySelector('[data-diagram="piaget"]');

if(registryBox){
drawPiaget(registryBox);
return;
}

/* old container system */

const old =
document.getElementById("diagramContainer");

if(old){
drawPiaget(old);
}

}

/* DOM ready */

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",autoLoad);
}else{
autoLoad();
}

/* =================================
REGISTER
================================= */

if(window.registerDiagram){
registerDiagram("piaget", drawPiaget);
}

})();