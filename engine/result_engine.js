export function loadResultHistory(){

let history = [];

/* scan all localStorage */
Object.keys(localStorage).forEach(key=>{

if(key.endsWith("_history")){

const type = key.replace("_history","");

let data = [];

try{
data = JSON.parse(localStorage.getItem(key)) || [];
}
catch(e){
console.warn("Invalid history:", key);
data = [];
}

const tagged = data
.filter(x => x && typeof x === "object")
.map(x=>({
...x,
testType:type.toUpperCase()
}));

history.push(...tagged);

}

});

/* latest first */
history.sort((a,b)=>{

const d1 = new Date(b.date || 0);
const d2 = new Date(a.date || 0);

return d1 - d2;

});

/* detect latest test */
const latestType = history[0]?.testType;

if(latestType){
history = history.filter(
x => x.testType === latestType
);
}

return history;

}