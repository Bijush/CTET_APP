/* CREATE TABS */

createTabs([

{ id:"natural", icon:"🌍", label:"Natural" },

{ id:"renewable", icon:"♻", label:"Renewable" },

{ id:"nonrenewable", icon:"⛽", label:"Non-Renewable" },

{ id:"conservation", icon:"🌱", label:"Conservation" },

{ id:"sustainable", icon:"🌏", label:"Sustainable" }

]);



/* ======================
NATURAL RESOURCES
====================== */

function naturalTheory(){
return `

<div class="card">

<h3>🌍 Natural Resources (প্রাকৃতিক সম্পদ)</h3>

<div class="feature-card">
Resources obtained from nature.
<br>
<span class="feature-bn">
প্রকৃতি থেকে প্রাপ্ত সম্পদ।
</span>
</div>

<div class="feature-card">
Examples: Air, Water, Soil, Forest, Minerals.
<br>
<span class="feature-bn">
উদাহরণ: বায়ু, জল, মাটি, বন, খনিজ।
</span>
</div>

<div class="feature-card">
Essential for survival of living beings.
<br>
<span class="feature-bn">
জীবের বেঁচে থাকার জন্য অপরিহার্য।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Environment provides basic needs
</div>

</div>

`;
}



/* ======================
RENEWABLE
====================== */

function renewableTheory(){
return `

<div class="card">

<h3>♻ Renewable Resources (নবায়নযোগ্য সম্পদ)</h3>

<div class="feature-card">
Can be replenished naturally.
<br>
<span class="feature-bn">
প্রাকৃতিকভাবে পুনরায় তৈরি হয়।
</span>
</div>

<div class="feature-card">
Examples: Sunlight, Wind, Water, Forest.
<br>
<span class="feature-bn">
উদাহরণ: সূর্যালোক, বাতাস, জল, বন।
</span>
</div>

<div class="feature-card">
Sustainable use is important.
<br>
<span class="feature-bn">
টেকসই ব্যবহার গুরুত্বপূর্ণ।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Renewable ≠ Unlimited ❌
</div>

</div>

`;
}



/* ======================
NON-RENEWABLE
====================== */

function nonrenewableTheory(){
return `

<div class="card">

<h3>⛽ Non-Renewable Resources (অ-নবায়নযোগ্য সম্পদ)</h3>

<div class="feature-card">
Cannot be replenished quickly.
<br>
<span class="feature-bn">
সহজে পুনরায় তৈরি হয় না।
</span>
</div>

<div class="feature-card">
Examples: Coal, Petroleum, Natural Gas.
<br>
<span class="feature-bn">
উদাহরণ: কয়লা, পেট্রোলিয়াম, প্রাকৃতিক গ্যাস।
</span>
</div>

<div class="feature-card">
Limited in quantity.
<br>
<span class="feature-bn">
পরিমাণ সীমিত।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Conservation & alternative energy
</div>

</div>

`;
}



/* ======================
CONSERVATION
====================== */

function conservationTheory(){
return `

<div class="card">

<h3>🌱 Conservation of Resources (সম্পদ সংরক্ষণ)</h3>

<div class="feature-card">
Wise and careful use of resources.
<br>
<span class="feature-bn">
সম্পদের সঠিক ও সতর্ক ব্যবহার।
</span>
</div>

<div class="feature-card">
Methods:
✔ Reduce  
✔ Reuse  
✔ Recycle  
<br>
<span class="feature-bn">
Reduce, Reuse, Recycle পদ্ধতি।
</span>
</div>

<div class="feature-card">
Prevent wastage of water and electricity.
<br>
<span class="feature-bn">
জল ও বিদ্যুতের অপচয় রোধ।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Sustainable Development
</div>

</div>

`;
}



/* ======================
SUSTAINABLE DEVELOPMENT
====================== */

function sustainableTheory(){
return `

<div class="card">

<h3>🌏 Sustainable Development (টেকসই উন্নয়ন)</h3>

<div class="feature-card">
Development that meets present needs without harming future generations.
<br>
<span class="feature-bn">
বর্তমানের প্রয়োজন পূরণ করে ভবিষ্যৎ প্রজন্মের ক্ষতি না করা উন্নয়ন।
</span>
</div>

<div class="feature-card">
Balance between environment and development.
<br>
<span class="feature-bn">
পরিবেশ ও উন্নয়নের মধ্যে ভারসাম্য।
</span>
</div>

<div class="feature-card">
Encourages renewable energy use.
</div>

<div class="feature-ctet">
CTET Trap: Development only means industrial growth ❌
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

natural: naturalTheory(),

renewable: renewableTheory(),

nonrenewable: nonrenewableTheory(),

conservation: conservationTheory(),

sustainable: sustainableTheory()

};