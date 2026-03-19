/* ======================
GLOBAL BOX
====================== */

let box;
let switchingTab = false;

const params = new URLSearchParams(location.search);
const topic = params.get("topic") || "default";

/* ======================
TAB GENERATOR
====================== */

window.createTabs = function(tabList){

const bar = document.getElementById("tabBar");

if(!bar) return;

bar.innerHTML = "";

/* ⭐ restore tab scroll position */

const savedScroll =
localStorage.getItem("tabBarScroll_"+topic);

if(savedScroll){
setTimeout(()=>{
bar.scrollLeft = parseInt(savedScroll);
},40);
}


/* ⭐ read tabs list */

let readTabs;

try{
readTabs =
JSON.parse(localStorage.getItem("readTheoryTabs_"+topic)) || [];
}catch{
readTabs = [];
}


tabList.forEach((t,i)=>{

const btn = document.createElement("button");

btn.className = "btab";

btn.dataset.tab = t.id;


/* ⭐ tick mark */

const tick =
readTabs.includes(t.id) ? " ✔" : "";


btn.innerHTML = `
<span>${t.icon}</span>
<label>${t.label}${tick}</label>
`;

if(i === 0){
btn.classList.add("active");
}


/* MCQ TAB */

if(t.type === "mcq"){
btn.onclick = (e)=>goMCQ(t.id,e);
}

/* NORMAL TAB */

else{
btn.onclick = (e)=>openTab(t.id,e);
}

bar.appendChild(btn);

});


/* ⭐ load last opened tab */

if(tabList.length){

const lastTab =
localStorage.getItem("lastTheoryTab_"+topic);

const defaultTab =
lastTab || tabList[0].id;

requestAnimationFrame(()=>{
openTab(defaultTab);
});

}

};



/* ======================
OPEN TAB
====================== */

window.openTab = function(tab,ev){
  switchingTab = true;

box = box || document.getElementById("theoryBox");

if(!box){
console.warn("Theory box not ready");
return;
}

/* prevent reload */

const currentTab = box.getAttribute("data-tab");

/* ⭐ save scroll BEFORE switching tab */

if(currentTab){
localStorage.setItem(
"scroll_"+topic+"_"+currentTab,
box.scrollTop || 0
);
}

if(currentTab === tab){
return;
}

box.setAttribute("data-tab",tab);




/* ⭐ remember tab */

localStorage.setItem("lastTheoryTab_"+topic, tab);



/* ⭐ update tick instantly */

const label =
document.querySelector(`.btab[data-tab="${tab}"] label`);

if(label && !label.textContent.includes("✔")){
label.textContent = label.textContent + " ✔";
}


/* ⭐ save tab bar scroll */




/* remove active */

document.querySelectorAll(".btab")
.forEach(btn=>btn.classList.remove("active"));


/* clicked tab */

if(ev && ev.currentTarget){

ev.currentTarget.classList.add("active");

ev.currentTarget.scrollIntoView({
behavior:"smooth",
inline:"center",
block:"nearest"
});

}

/* auto open */

else{

const btn =
document.querySelector(`.btab[data-tab="${tab}"]`);

if(btn){
btn.classList.add("active");
}

}


/* fade */

box.classList.remove("fade-in");
box.classList.add("fade-out");

setTimeout(()=>{

try{

loadTabContent(tab);

/* ⭐ restore scroll AFTER content render */

setTimeout(()=>{

const savedScroll =
localStorage.getItem("scroll_"+topic+"_"+tab);

if(savedScroll !== null){
box.scrollTop = parseInt(savedScroll);
}else{
box.scrollTop = 0;
}

},120);

/* ⭐ mark tab read after first load */

let readTabs;

try{
readTabs =
JSON.parse(localStorage.getItem("readTheoryTabs_"+topic)) || [];
}catch{
readTabs = [];
}

if(!readTabs.includes(tab)){
readTabs.push(tab);
localStorage.setItem(
"readTheoryTabs_"+topic,
JSON.stringify(readTabs)
);
}

switchingTab = false;

}catch(err){

console.error(err);

box.innerHTML=`
<div class="card">
❌ Content failed
</div>
`;

}

box.classList.remove("fade-out");
box.classList.add("fade-in");

},180);

};
/* ======================
LOAD CONTENT
====================== */

window.loadTabContent = function(tab){

box = document.getElementById("theoryBox");

if(!box) return;

/* retry if content not ready */

if(!window.theoryContent){

box.innerHTML=`
<div class="card">
⚠ Content loading...
</div>
`;

setTimeout(()=>loadTabContent(tab),120);
return;

}

/* render tab */

box.innerHTML =
window.theoryContent[tab] ||
`<div class="card">No content</div>`;

/* force scroll reset for new content */
//box.scrollTop = 0;


/* ⭐ AUTO DIAGRAM DETECT */

requestAnimationFrame(()=>{

const diagrams =
box.querySelectorAll(".diagram-box");

diagrams.forEach(el=>{

const type =
el.dataset.diagram;

if(window.diagramRegistry &&
   window.diagramRegistry[type]){

window.diagramRegistry[type](el);

}

});

});

};



/* ======================
MCQ NAVIGATION
====================== */

window.goMCQ = function(topic,event){

if(event && event.currentTarget){

document.querySelectorAll(".btab")
.forEach(btn=>btn.classList.remove("active"));

event.currentTarget.classList.add("active");

}

/* ripple */

const btn = event?.currentTarget;

if(btn){

const circle = document.createElement("span");

circle.classList.add("ripple");

const rect = btn.getBoundingClientRect();

const size = Math.max(rect.width,rect.height);

circle.style.width =
circle.style.height = size + "px";

circle.style.left =
event.clientX - rect.left - size/2 + "px";

circle.style.top =
event.clientY - rect.top - size/2 + "px";

btn.appendChild(circle);

setTimeout(()=>circle.remove(),600);

}

/* redirect */

setTimeout(()=>{

window.location.href =
`/CTET_APP/pages/MCQ_LOADER/mcq_engine.html?test=${topic}`;

},150);

};



/* ======================
BACK BUTTON
====================== */

window.goBack = function(){

window.history.back();

};

/* ======================
TAB BAR SCROLL SAVE
====================== */

window.addEventListener("DOMContentLoaded",()=>{

const bar = document.getElementById("tabBar");

if(!bar) return;

bar.addEventListener("scroll",()=>{

localStorage.setItem(
"tabBarScroll_"+topic,
bar.scrollLeft
);

});

});
/* ======================
MCQ TOGGLE
====================== */

window.toggleMCQ = function(box){

const answer =
box.querySelector(".mcq-answer");

if(!answer) return;

if(answer.style.display === "none" || !answer.style.display){

answer.style.display = "block";

}else{

answer.style.display = "none";

}

};

/* ======================
MCQ OPTION SELECT
====================== */

document.addEventListener("click",function(e){

const opt = e.target.closest(".mcq-opt");
if(!opt) return;

const box = opt.closest(".mcq-box");
if(!box) return;

box.querySelectorAll(".mcq-opt")
.forEach(o=>o.classList.remove("selected","wrong","right"));

/* show selected hint */

opt.classList.add("selected");

/* correct */

if(opt.classList.contains("correct")){
opt.classList.add("right");
}

/* wrong */

else{
opt.classList.add("wrong");

const correct =
box.querySelector(".mcq-opt.correct");

if(correct){
correct.classList.add("right");
}
}

/* show answer */

const ans =
box.querySelector(".mcq-answer");

if(ans) ans.style.display="block";

});

/* ======================
SCROLL SAVE LISTENER
====================== */

window.addEventListener("DOMContentLoaded",()=>{

box = document.getElementById("theoryBox");

if(!box) return;

let scrollTimer;

box.addEventListener("scroll",()=>{

clearTimeout(scrollTimer);

scrollTimer = setTimeout(()=>{

const tab = box.getAttribute("data-tab");

if(tab && !switchingTab){
localStorage.setItem(
"scroll_"+topic+"_"+tab,
box.scrollTop
);
}

},150);

});

});
