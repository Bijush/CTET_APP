/* CREATE TABS */

createTabs([

{ id:"pollution", icon:"🌫", label:"Pollution" },

{ id:"forest", icon:"🌳", label:"Forest" },

{ id:"water", icon:"💧", label:"Water" },

{ id:"climate", icon:"🌍", label:"Climate" }

]);



/* ======================
POLLUTION
====================== */

function pollutionTheory(){
return `

<div class="card">

<h3>🌫 Pollution (দূষণ)</h3>

<div class="feature-card">
<b>1️⃣ Air Pollution</b><br>
Caused by vehicles, factories, burning of fuels.<br>
<span class="feature-bn">
যানবাহন, কারখানা ও জ্বালানি পোড়ানো থেকে বায়ু দূষণ হয়।
</span><br>
Effects: Breathing problems, global warming.
</div>

<div class="feature-card">
<b>2️⃣ Water Pollution</b><br>
Industrial waste, sewage, plastic dumping.<br>
<span class="feature-bn">
কারখানার বর্জ্য, নর্দমা ও প্লাস্টিক ফেলার ফলে জল দূষণ হয়।
</span><br>
Effects: Water-borne diseases.
</div>

<div class="feature-card">
<b>3️⃣ Noise Pollution</b><br>
Loudspeakers, traffic, construction work.<br>
<span class="feature-bn">
লাউডস্পিকার, যানবাহন ও নির্মাণকাজ শব্দ দূষণ সৃষ্টি করে।
</span><br>
Effects: Stress, hearing loss.
</div>

<div class="feature-ctet">
CTET Focus: Types • Causes • Prevention
</div>

</div>

`;
}



/* ======================
FOREST
====================== */

function forestTheory(){
return `

<div class="card">

<h3>🌳 Forest & Biodiversity (বন ও জীববৈচিত্র্য)</h3>

<div class="feature-card">
<b>Importance of Forest:</b><br>
✔ Provides oxygen<br>
✔ Maintains ecological balance<br>
✔ Home of wildlife<br>
<span class="feature-bn">
অক্সিজেন দেয়, পরিবেশের ভারসাম্য রক্ষা করে, বন্যপ্রাণীর আবাসস্থল।
</span>
</div>

<div class="feature-card">
<b>Deforestation Effects:</b><br>
✔ Soil erosion<br>
✔ Floods<br>
✔ Loss of biodiversity<br>
<span class="feature-bn">
মাটিক্ষয়, বন্যা ও জীববৈচিত্র্যের ক্ষতি।
</span>
</div>

<div class="feature-card">
<b>Wildlife Protection:</b><br>
National parks, wildlife sanctuaries, conservation laws.
</div>

<div class="feature-ctet">
CTET Keyword: Conservation • Sustainable development
</div>

</div>

`;
}



/* ======================
WATER
====================== */

function waterTheory(){
return `

<div class="card">

<h3>💧 Water Conservation (জল সংরক্ষণ)</h3>

<div class="feature-card">
<b>Why Save Water?</b><br>
✔ Essential for life<br>
✔ Limited fresh water resources<br>
<span class="feature-bn">
জীবনের জন্য অপরিহার্য এবং মিঠা জলের পরিমাণ সীমিত।
</span>
</div>

<div class="feature-card">
<b>Methods:</b><br>
✔ Rainwater Harvesting<br>
✔ Reuse & Recycling<br>
✔ Prevent water wastage<br>
<span class="feature-bn">
বৃষ্টির জল সংরক্ষণ, পুনঃব্যবহার, অপচয় রোধ।
</span>
</div>

<div class="feature-card">
<b>Practical Example:</b><br>
Fix leaking taps, collect rainwater.
</div>

<div class="feature-ctet">
CTET Line: Sustainable use of resources
</div>

</div>

`;
}



/* ======================
CLIMATE
====================== */

function climateTheory(){
return `

<div class="card">

<h3>🌍 Climate Change (জলবায়ু পরিবর্তন)</h3>

<div class="feature-card">
<b>Global Warming:</b><br>
Increase in Earth’s temperature due to greenhouse gases.<br>
<span class="feature-bn">
গ্রিনহাউস গ্যাসের কারণে পৃথিবীর তাপমাত্রা বৃদ্ধি।
</span>
</div>

<div class="feature-card">
<b>Greenhouse Effect:</b><br>
Carbon dioxide traps heat in atmosphere.
</div>

<div class="feature-card">
<b>Effects:</b><br>
✔ Melting glaciers<br>
✔ Rising sea level<br>
✔ Extreme weather events
</div>

<div class="feature-card">
<b>Prevention:</b><br>
✔ Plant more trees<br>
✔ Use renewable energy<br>
✔ Reduce carbon footprint
</div>

<div class="feature-ctet">
CTET Trap: Climate change caused only by industries ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

pollution: pollutionTheory(),

forest: forestTheory(),

water: waterTheory(),

climate: climateTheory()

};