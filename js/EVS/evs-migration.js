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
OMANA'S JOURNEY
====================== */

if(tab === "omana"){

box.innerHTML = `
<div class="card">
<h3>🚆 Omana’s Journey (Migration for Work)</h3>

<div class="feature-card">
Omana’s family migrates from Kerala to Gujarat for work.
<br>
<span class="feature-bn">
ওমানার পরিবার কাজের জন্য কেরালা থেকে গুজরাটে যায়।
</span>
</div>

<div class="feature-card">
Children face difficulty in education due to frequent movement.
<br>
<span class="feature-bn">
বারবার স্থান পরিবর্তনের ফলে শিশুদের পড়াশোনায় সমস্যা হয়।
</span>
</div>

<div class="feature-card">
Highlights livelihood challenges of migrant workers.
<br>
<span class="feature-bn">
অভিবাসী শ্রমিকদের জীবিকার সমস্যাকে তুলে ধরে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Empathy • Right to Education • Social justice
</div>

</div>
`;
}

/* ======================
NO PLACE FOR US
====================== */

else if(tab === "displacement"){

box.innerHTML = `
<div class="card">
<h3>🏗 No Place for Us? (Displacement)</h3>

<div class="feature-card">
People lose homes due to dam construction.
<br>
<span class="feature-bn">
বাঁধ নির্মাণের কারণে মানুষ বাড়িঘর হারায়।
</span>
</div>

<div class="feature-card">
Resettlement problems after displacement.
<br>
<span class="feature-bn">
উচ্ছেদের পরে পুনর্বাসনের সমস্যা।
</span>
</div>

<div class="feature-card">
Development vs Human Rights debate.
<br>
<span class="feature-bn">
উন্নয়ন বনাম মানবাধিকার প্রশ্ন।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Rehabilitation • Social responsibility
</div>

</div>
`;
}

/* ======================
SEASONAL MIGRATION
====================== */

else if(tab === "seasonal"){

box.innerHTML = `
<div class="card">
<h3>🌾 Seasonal Migration</h3>

<div class="feature-card">
Families migrate during harvesting season.
<br>
<span class="feature-bn">
ফসল কাটার সময় পরিবার স্থান পরিবর্তন করে।
</span>
</div>

<div class="feature-card">
Children help parents in work.
<br>
<span class="feature-bn">
শিশুরা বাবা-মাকে কাজে সাহায্য করে।
</span>
</div>

<div class="feature-card">
Interrupts schooling.
<br>
<span class="feature-bn">
শিক্ষা ব্যাহত হয়।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Child labour issues • Educational continuity
</div>

</div>
`;
}

/* ======================
LIVELIHOOD TYPES
====================== */

else if(tab === "livelihood"){

box.innerHTML = `
<div class="card">
<h3>💼 Livelihood & Occupations</h3>

<div class="feature-card">
Livelihood means means of earning a living.
<br>
<span class="feature-bn">
জীবিকা মানে জীবিকা নির্বাহের উপায়।
</span>
</div>

<div class="feature-card">
Examples: Farming, fishing, factory work.
</div>

<div class="feature-card">
Climate & geography influence occupation.
<br>
<span class="feature-bn">
জলবায়ু ও ভৌগোলিক অবস্থান পেশাকে প্রভাবিত করে।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Occupation is same everywhere ❌
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

    box.setAttribute("data-tab","omana");
    loadTabContent("omana");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});