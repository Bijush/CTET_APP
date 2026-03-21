/* =================================
GESELL DIAGRAM
Auto registry compatible
No other file change needed
================================= */

(function(){
  
function drawGesell(container){

  container.innerHTML = `

<svg viewBox="0 0 360 700"
     width="100%"
     height="auto">

<!-- 1 Head Control -->
<rect class="stage" data-stage="g1"
 x="40" y="30" width="280" height="90" rx="14"/>
<text x="60" y="60" class="title">
Head Control
</text>
<text x="60" y="80" class="sub">
Cephalocaudal Principle
</text>

<!-- 2 Sitting -->
<rect class="stage" data-stage="g2"
 x="40" y="140" width="280" height="90" rx="14"/>
<text x="60" y="170" class="title">
Sitting
</text>
<text x="60" y="190" class="sub">
Motor Development Sequence
</text>

<!-- 3 Crawling -->
<rect class="stage" data-stage="g3"
 x="40" y="250" width="280" height="90" rx="14"/>
<text x="60" y="280" class="title">
Crawling
</text>
<text x="60" y="300" class="sub">
Fixed Sequence
</text>

<!-- 4 Standing -->
<rect class="stage" data-stage="g4"
 x="40" y="360" width="280" height="90" rx="14"/>
<text x="60" y="390" class="title">
Standing
</text>
<text x="60" y="410" class="sub">
Biological Readiness
</text>

<!-- 5 Walking -->
<rect class="stage" data-stage="g5"
 x="40" y="470" width="280" height="90" rx="14"/>
<text x="60" y="500" class="title">
Walking
</text>
<text x="60" y="520" class="sub">
Maturation Complete
</text>

</svg>

<style>
.stage{
  fill:#e8f5e9;
  stroke:#2e7d32;
  stroke-width:2;
  cursor:pointer;
  transition:.3s;
}
.stage:hover{
  fill:#c8e6c9;
}
.title{
  font:bold 15px Arial;
}
.sub{
  font:12px Arial;
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

function openStagePopup(type){

let content = "";

if(type === "g1"){
content = `
<h3>👶 Head Control</h3>
<b>Principle:</b> Cephalocaudal<br>
<b>Meaning:</b> Development starts from head downward.<br>
<span>মাথা থেকে নিচের দিকে বিকাশ শুরু হয়।</span>
`;
}

else if(type === "g2"){
content = `
<h3>🪑 Sitting</h3>
<b>Concept:</b> Maturation before training<br>
<b>Example:</b> Child sits when muscles are ready.<br>
<span>পেশি প্রস্তুত হলে শিশু বসে।</span>
`;
}

else if(type === "g3"){
content = `
<h3>🐾 Crawling</h3>
<b>Concept:</b> Fixed developmental order<br>
<b>Important:</b> Cannot skip stages.<br>
<span>বিকাশের ধাপ লাফিয়ে পার হওয়া যায় না।</span>
`;
}

else if(type === "g4"){
content = `
<h3>🧍 Standing</h3>
<b>Concept:</b> Biological readiness<br>
<b>CTET Point:</b> Training cannot force development.<br>
<span>প্রশিক্ষণ দিয়ে বিকাশ জোর করা যায় না।</span>
`;
}

else if(type === "g5"){
content = `
<h3>🚶 Walking</h3>
<b>Result:</b> Natural maturation outcome<br>
<b>Keyword:</b> Heredity > Environment<br>
<span>বংশগতি পরিবেশের চেয়ে বেশি গুরুত্বপূর্ণ।</span>
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
document.querySelector('[data-diagram="gesell"]');

if(registryBox){
drawGesell(registryBox);
return;
}

const old =
document.getElementById("diagramContainer");

if(old){
drawGesell(old);
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
registerDiagram("gesell", drawGesell);
}

})();