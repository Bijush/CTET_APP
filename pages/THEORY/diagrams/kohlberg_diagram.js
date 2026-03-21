/* =================================
PIAGET DIAGRAM
Auto registry compatible
No other file change needed
================================= */

(function(){

function drawKohlberg(container){
  container.innerHTML = `

<svg viewBox="0 0 360 720"
     width="100%"
     height="auto">

<!-- LEVEL 1 -->
<rect class="stage" data-stage="l1"
      x="40" y="30"
      width="280" height="120" rx="16"/>
<text x="60" y="65" class="title">
Level 1: Pre-Conventional
</text>
<text x="60" y="90" class="sub">
Stage 1 → Punishment
</text>
<text x="60" y="110" class="sub">
Stage 2 → Self-interest
</text>

<!-- LEVEL 2 -->
<rect class="stage" data-stage="l2"
      x="40" y="200"
      width="280" height="120" rx="16"/>
<text x="60" y="235" class="title">
Level 2: Conventional
</text>
<text x="60" y="260" class="sub">
Stage 3 → Good child
</text>
<text x="60" y="280" class="sub">
Stage 4 → Law & Order
</text>

<!-- LEVEL 3 -->
<rect class="stage" data-stage="l3"
      x="40" y="370"
      width="280" height="120" rx="16"/>
<text x="60" y="405" class="title">
Level 3: Post-Conventional
</text>
<text x="60" y="430" class="sub">
Stage 5 → Social contract
</text>
<text x="60" y="450" class="sub">
Stage 6 → Universal ethics
</text>

<!-- ARROWS -->
<line class="arrow"
      x1="180" y1="150"
      x2="180" y2="200"/>
<line class="arrow"
      x1="180" y1="320"
      x2="180" y2="370"/>

</svg>

<style>
.stage{
  fill:#f3e5f5;
  stroke:#8e24aa;
  stroke-width:2;
  cursor:pointer;
  transition:.4s;
}
.stage:hover{
  fill:#e1bee7;
}
.title{
  font:bold 15px Arial;
}
.sub{
  font:13px Arial;
}
.arrow{
  stroke:#8e24aa;
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

if(type === "l1"){

content = `
<h3>🧒 Level 1: Pre-Conventional</h3>

<b>Age:</b> Below 9 years

<br><br>

<b>Stage 1:</b> Obedience & Punishment  
Right = Avoid punishment  
Example: “I won’t cheat because teacher will punish.”

<br><br>

<b>Stage 2:</b> Individualism & Exchange  
Right = Personal gain  
Example: “You help me, I help you.”

<br><br>

CTET Focus → Fear based morality.
`;
}

else if(type === "l2"){

content = `
<h3>👥 Level 2: Conventional</h3>

<b>Stage 3:</b> Good Boy / Good Girl  
Right = Approval from others  
Example: “People will think I am good.”

<br><br>

<b>Stage 4:</b> Law & Order  
Right = Follow rules & maintain order  
Example: “Rules must be followed.”

<br><br>

CTET Most Asked → Stage 4.
`;
}

else if(type === "l3"){

content = `
<h3>⚖️ Level 3: Post-Conventional</h3>

<b>Stage 5:</b> Social Contract  
Law can change for human welfare.  

<br><br>

<b>Stage 6:</b> Universal Ethical Principles  
Justice > Law  

Example: “Saving life is more important than property.”

<br><br>

Rare highest level.
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
AUTO LOAD (fallback)
================================= */

function autoLoad(){

/* registry system */

const registryBox =
document.querySelector('[data-diagram="kohlberg"]');

if(registryBox){
drawKohlberg(registryBox);
return;
}

/* old container system */

const old =
document.getElementById("diagramContainer");

if(old){
drawKohlberg(old);
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
registerDiagram("kohlberg", drawKohlberg);
}

})();