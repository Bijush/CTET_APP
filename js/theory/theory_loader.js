/* ======================
GET URL PARAMS
====================== */

const params = new URLSearchParams(location.search);

const folder = params.get("folder") || "CDP";
const sub    = params.get("sub") || "";
const topic  = params.get("topic") || "piaget";

/* ======================
BASE PATH
(loader inside js/theory/)
====================== */

const base = `./${folder}/`;

/* ======================
AUTO SUBFOLDER LIST
(Add more if needed)
====================== */

const subFolders = [
"",
"pedagogy",
"languagePedagogy",
"skills",
"grammar",
"assessment",
"LSRW",
"method",
"LanguageInClassRoom",
"TeachingSupport",
"LanguageComponent",
"reading"
];

/* ======================
BUILD PATH LIST
====================== */

let paths = [];

/* priority: URL sub folder */

if(sub){
paths.push(`${base}${sub}/${topic}.js`);
}

/* root file */

paths.push(`${base}${topic}.js`);

/* auto detect folders */

subFolders.forEach(f=>{
if(f){
paths.push(`${base}${f}/${topic}.js`);
}
});

/* remove duplicates */

paths = [...new Set(paths)];


/* ======================
LOAD THEORY
====================== */

async function loadTheory(){

for(const path of paths){

try{

await import(path);

console.log("✅ Loaded:", path);

/* OPTIONAL DIAGRAM */

import(`../../pages/THEORY/diagrams/${topic}_diagram.js`)
.catch(()=>{});

return;

}catch(e){

console.log("⏭ Skip:", path);

}

}

/* if not found */

const box = document.getElementById("theoryBox");

if(box){
box.innerHTML = `
<div class="card">
⚠️ Theory not found
</div>
`;
}

}

loadTheory();