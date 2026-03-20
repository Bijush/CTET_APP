/* CREATE TABS */

createTabs([

{ id:"shelter", icon:"🏔", label:"Shelter" },

{ id:"climate", icon:"🌍", label:"Climate" },
{ id:"plants", icon:"🌱", label:"Plants" },

{ id:"animals", icon:"🐾", label:"Animals" },



{ id:"revision", icon:"⚡", label:"Revision" },

{ id:"adaptionMcq", icon:"📝", label:"Adaption MCQ", type:"mcq" }

]);


function shelterTheory(){
return `

<div class="card">

<h3>🏔 A Shelter So High (Ladakh Life)</h3>

<div class="feature-card">
People of Ladakh live in extreme cold climate.
<br>
<span class="feature-bn">
লাদাখের মানুষ চরম ঠান্ডা আবহাওয়ায় বসবাস করে।
</span>
</div>

<div class="feature-card">
Houses have thick walls and small windows.
<br>
<span class="feature-bn">
বাড়ির দেয়াল মোটা ও জানালা ছোট হয়।
</span>
</div>

<div class="feature-card">
They wear woollen clothes to survive cold.
<br>
<span class="feature-bn">
ঠান্ডা থেকে বাঁচতে উলের পোশাক পরে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Human adaptation to climate
</div>

</div>

`;
}


function climateTheory(){
return `
<div class="card">
<h3>🌍 Climate Adaptation</h3>

<div class="feature-card">
Different regions have different climates.
<br>
<span class="feature-bn">
বিভিন্ন অঞ্চলের আবহাওয়া ভিন্ন।
</span>
</div>

<div class="feature-card">
People adapt food, clothing and houses according to climate.
<br>
<span class="feature-bn">
মানুষ আবহাওয়া অনুযায়ী খাদ্য, পোশাক ও বাড়ি পরিবর্তন করে।
</span>
</div>

<div class="feature-card">
Example: Desert people wear loose cotton clothes.
<br>
<span class="feature-bn">
উদাহরণ: মরুভূমির মানুষ ঢিলেঢালা সুতির পোশাক পরে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Adaptation ≠ Adjustment only, it is survival strategy
</div>

</div>

`;
}

function plantsTheory(){
return `
<div class="card">
<h3>🌱 Adaptation in Plants</h3>

<div class="feature-card">
Cactus has thick stem to store water.
<br>
<span class="feature-bn">
ক্যাকটাসের মোটা কাণ্ড জল সঞ্চয় করে।
</span>
</div>

<div class="feature-card">
Leaves are modified into spines.
<br>
<span class="feature-bn">
পাতা কাঁটায় রূপান্তরিত হয়।
</span>
</div>

<div class="feature-card">
Mangrove trees grow in marshy land.
<br>
<span class="feature-bn">
ম্যাংগ্রোভ গাছ জলাভূমিতে জন্মায়।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Structure → Function relationship
</div>

</div>

`;
}

function animalsTheory(){
return ``;
}



window.theoryContent = {

shelter: shelterTheory(),

climate: climateTheory(),

plants: plantsTheory(),

animals: animalsTheory()

};