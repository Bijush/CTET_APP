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
WAHIDA PRISM
====================== */

if(tab === "wahida"){

box.innerHTML = `
<div class="card">
<h3>👩‍✈️ Wahida Prism (Gender Equality)</h3>

<div class="feature-card">
Wahida became a Navy doctor.<br>
<span class="feature-bn">
ওয়াহিদা একজন নৌবাহিনীর ডাক্তার হন।
</span>
</div>

<div class="feature-card">
Breaks gender stereotypes.<br>
<span class="feature-bn">
লিঙ্গভিত্তিক ধারণা ভেঙে দেয়।
</span>
</div>

<div class="feature-card">
Message: Girls can achieve equal success in all professions.
<br>
<span class="feature-bn">
বার্তা: মেয়েরা সব পেশায় সমান সাফল্য অর্জন করতে পারে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Gender equality • Equal opportunity
</div>

</div>
`;
}

/* ======================
SUNDERLAL BAHUGUNA / TREE PROTECTION
====================== */

else if(tab === "amrita"){

box.innerHTML = `
<div class="card">
<h3>🌳 The Story of Amrita (Bishnoi Community)</h3>

<div class="feature-card">
Amrita Devi sacrificed her life to protect trees.
<br>
<span class="feature-bn">
অমৃতা দেবী গাছ রক্ষার জন্য প্রাণ দিয়েছিলেন।
</span>
</div>

<div class="feature-card">
Shows courage and environmental values.
<br>
<span class="feature-bn">
সাহস ও পরিবেশ সচেতনতার উদাহরণ।
</span>
</div>

<div class="feature-card">
Women played key role in forest protection.
<br>
<span class="feature-bn">
বন রক্ষায় নারীদের গুরুত্বপূর্ণ ভূমিকা।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Environmental sensitivity • Women empowerment
</div>

</div>
`;
}

/* ======================
SUNDERLAL / CHIPKO
====================== */

else if(tab === "chipko"){

box.innerHTML = `
<div class="card">
<h3>🌲 Chipko Movement</h3>

<div class="feature-card">
Women hugged trees to prevent cutting.
<br>
<span class="feature-bn">
গাছ কাটার বিরুদ্ধে মহিলারা গাছ জড়িয়ে ধরেছিলেন।
</span>
</div>

<div class="feature-card">
Promoted environmental awareness.
<br>
<span class="feature-bn">
পরিবেশ সচেতনতা বৃদ্ধি করে।
</span>
</div>

<div class="feature-card">
Shows collective community effort.
</div>

<div class="feature-ctet">
CTET Focus: Community participation • Gender role in society
</div>

</div>
`;
}

/* ======================
INCLUSION
====================== */

else if(tab === "inclusion"){

box.innerHTML = `
<div class="card">
<h3>🤝 Inclusion & Equal Opportunity</h3>

<div class="feature-card">
All children deserve equal education.
<br>
<span class="feature-bn">
সব শিশু সমান শিক্ষার অধিকারী।
</span>
</div>

<div class="feature-card">
No discrimination based on gender.
<br>
<span class="feature-bn">
লিঙ্গের ভিত্তিতে বৈষম্য নয়।
</span>
</div>

<div class="feature-card">
Respect diversity in classroom.
<br>
<span class="feature-bn">
শ্রেণিকক্ষে বৈচিত্র্যকে সম্মান করা।
</span>
</div>

<div class="feature-ctet">
CTET Trap: “Only boys are better in science” ❌
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

    box.setAttribute("data-tab","wahida");
    loadTabContent("wahida");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});