/* =================================
VYGOTSKY ZPD DIAGRAM
Auto registry compatible
No other file change needed
================================= */

(function(){

function drawVygotsky(container){

container.innerHTML = `

<svg viewBox="0 0 360 600"
     width="100%"
     height="auto">

<!-- LEVEL 1 -->
<rect class="stage" data-stage="l1"
      x="40" y="40"
      width="280" height="110" rx="16"/>
<text x="60" y="75" class="title">
Level 1: Can Do Alone
</text>
<text x="60" y="100" class="sub">
Independent Tasks
</text>

<!-- LEVEL 2 -->
<rect class="stage" data-stage="l2"
      x="40" y="200"
      width="280" height="110" rx="16"/>
<text x="60" y="235" class="title">
Level 2: ZPD
</text>
<text x="60" y="260" class="sub">
With Guidance
</text>

<!-- LEVEL 3 -->
<rect class="stage" data-stage="l3"
      x="40" y="360"
      width="280" height="110" rx="16"/>
<text x="60" y="395" class="title">
Level 3: Beyond Ability
</text>
<text x="60" y="420" class="sub">
Even Help Cannot Solve
</text>

<!-- ARROWS -->
<line class="arrow"
      x1="180" y1="150"
      x2="180" y2="200"/>
<line class="arrow"
      x1="180" y1="310"
      x2="180" y2="360"/>

</svg>

<style>

.stage{
  fill:#e8f5e9;
  stroke:#2e7d32;
  stroke-width:2;
  cursor:pointer;
  transition:.4s;
}

.stage:hover{
  fill:#c8e6c9;
}

.title{
  font:bold 15px Arial;
}

.sub{
  font:13px Arial;
}

.arrow{
  stroke:#2e7d32;
  stroke-width:3;
  stroke-dasharray:6;
}

</style>

`;

container
.querySelectorAll(".stage")
.forEach(stage=>{
stage.addEventListener("click",()=>{
openStagePopup(
stage.getAttribute("data-stage")
);
});
});

}

/* =================================
POPUP
================================= */

function openStagePopup(type){

let content = "";

if(type==="l1"){

content = `
<h3>🟢 Level 1: Can Do Alone</h3>

Child can perform tasks independently.

<br><br>

Example:
Child solves simple addition without help.

<br><br>

CTET Tip → Already mastered skill.
`;
}

else if(type==="l2"){

content = `
<h3>🟡 Level 2: ZPD (Zone of Proximal Development)</h3>

Tasks child cannot do alone but can do with guidance.

<br><br>

Example:
Teacher gives hint and child solves puzzle.

<br><br>

Key Idea → Learning happens here.
`;
}

else if(type==="l3"){

content = `
<h3>🔴 Level 3: Beyond Ability</h3>

Tasks beyond current developmental level.

<br><br>

Example:
Child asked to solve algebra equation.

<br><br>

Even guidance cannot help yet.
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
document.querySelector('[data-diagram="vygotsky"]');

if(registryBox){
drawVygotsky(registryBox);
return;
}

const old =
document.getElementById("diagramContainer");

if(old){
drawVygotsky(old);
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
registerDiagram("vygotsky", drawVygotsky);
}

})();