/* ======================
LOAD BOX
====================== */

let box;

/* ======================
OPEN TAB
====================== */

window.openTab = function(tab, ev){

  if(!box) return;

  // Remove active
  document.querySelectorAll(".btab")
    .forEach(btn => btn.classList.remove("active"));

  if(ev && ev.currentTarget){
    ev.currentTarget.classList.add("active");

    ev.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }

  const currentTab =
    box.getAttribute("data-tab");

  if(currentTab === tab) return;

  box.setAttribute("data-tab", tab);

  box.classList.remove("fade-in");
  box.classList.add("fade-out");

  setTimeout(()=>{

    loadTabContent(tab);

    box.classList.remove("fade-out");
    box.classList.add("fade-in");

  },180);

};


/* ======================
LOAD TAB CONTENT
====================== */

function loadTabContent(tab){

if(!box) return;

/* ======================
A SHELTER SO HIGH
====================== */

if(tab === "shelter"){

box.innerHTML = `
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

/* ======================
CLIMATE ADAPTATION
====================== */

else if(tab === "climate"){

box.innerHTML = `
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

/* ======================
ANIMAL ADAPTATION
====================== */

else if(tab === "animals"){

box.innerHTML = `
<div class="card">
<h3>🐾 Adaptation in Animals</h3>

<div class="feature-card">
Camel has hump to store fat in desert.
<br>
<span class="feature-bn">
উটের কুঁজ মরুভূমিতে শক্তি সঞ্চয় করে।
</span>
</div>

<div class="feature-card">
Polar bear has thick fur in cold region.
<br>
<span class="feature-bn">
মেরু ভাল্লুকের ঘন লোম ঠান্ডা থেকে রক্ষা করে।
</span>
</div>

<div class="feature-card">
Fish have gills to breathe in water.
<br>
<span class="feature-bn">
মাছের ফুলকা জলে শ্বাস নিতে সাহায্য করে।
</span>
</div>

<div class="feature-ctet">
CTET Trap: “All animals survive everywhere” ❌
</div>

</div>
`;
}

/* ======================
PLANT ADAPTATION
====================== */

else if(tab === "plants"){

box.innerHTML = `
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

}
/*
window.goBack = function(){
  window.location.replace("../subject-list.html");
};
*/
/* ======================
PROGRESS SAVE
====================== */

function saveTabProgress(tab){

  const page =
    location.pathname.split("/").pop();

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  const totalScrollable =
    docHeight - windowHeight;

  let percent = 100;

  if(totalScrollable > 0){
    percent = Math.min(
      100,
      Math.round(
        (scrollTop / totalScrollable) * 100
      )
    );
  }

  let data =
    JSON.parse(
      localStorage.getItem("tabProgress")
    ) || {};

  if(!data[page]) data[page] = {};

  const oldPercent =
    data[page][tab] || 0;

  if(percent > oldPercent){

    data[page][tab] = percent;

    localStorage.setItem(
      "tabProgress",
      JSON.stringify(data)
    );
  }
}


/* ======================
DEFAULT LOAD
====================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    box =
      document.getElementById("theoryBox");

    if (!box) return;

    box.setAttribute("data-tab","shelter");
    loadTabContent("shelter");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});