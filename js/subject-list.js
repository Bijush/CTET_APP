
/* ======================
LEVEL SYSTEM
====================== */

let CTET_LEVEL =
localStorage.getItem("ctetLevel") || "PRIMARY";

/* ======================
SUBJECT DATA
====================== */

const subjectData = {

PRIMARY:{

  CDP:[

    {
      group:"Development Theories",
      items:[
        { title:"Jean Piaget Theory", page:"THEORY/theory.html?folder=CDP&topic=piaget", progress:0, lock:false },
        { title:"Lev Vygotsky Theory", page:"THEORY/theory.html?folder=CDP&topic=vygotsky", progress:0, lock:false },
        { title:"Kohlberg Moral Development", page:"THEORY/theory.html?folder=CDP&topic=Kohlberg", progress:0, lock:false },
        { title:"Erikson Psychosocial Theory", page:"THEORY/theory.html?folder=CDP&topic=erikson", progress:0, lock:false },
        { title:"Gesell Maturation Theory", page:"THEORY/theory.html?folder=CDP&topic=gesell", progress:0, lock:false }
      ]
    },

    {
      group:"Learning Theories",
      items:[
        { title:"Pavlov Classical Conditioning", page:"pavlov.html", progress:0, lock:false },
        { title:"Thorndike Trial & Error", page:"thorndike.html", progress:0, lock:false },
        { title:"Skinner Operant Conditioning", page:"skinner.html", progress:0, lock:false },
        { title:"Bandura Social Learning", page:"bandura.html", progress:0, lock:false },
        { title:"Bruner Discovery Learning", page:"bruner.html", progress:0, lock:false },
        { title:"Constructivism", page:"constructivism.html", progress:0, lock:false }
      ]
    },

    {
      group:"Intelligence",
      items:[
        { title:"Binet IQ Theory", page:"binet.html", progress:0, lock:false },
        { title:"Gardner Multiple Intelligence", page:"gardner.html", progress:0, lock:false },
        { title:"Sternberg Triarchic Theory", page:"sternberg.html", progress:0, lock:false },
        { title:"Emotional Intelligence", page:"emotional-intelligence.html", progress:0, lock:false }
      ]
    },

    {
      group:"Child Development Concepts",
      items:[
        { title:"Growth vs Development", page:"growth-development.html", progress:0, lock:false },
        { title:"Principles of Development", page:"principles.html", progress:0, lock:false },
        { title:"Heredity & Environment", page:"heredity.html", progress:0, lock:false },
        { title:"Individual Differences", page:"individual-difference.html", progress:0, lock:false },
        { title:"Nature vs Nurture", page:"nature-nurture.html", progress:0, lock:false }
      ]
    },

    {
      group:"Inclusive Education",
      items:[
        { title:"CWSN Concept", page:"cwsn.html", progress:0, lock:false },
        { title:"ADHD", page:"adhd.html", progress:0, lock:false },
        { title:"Dyslexia", page:"dyslexia.html", progress:0, lock:false },
        { title:"Autism", page:"autism.html", progress:0, lock:false },
        { title:"Gifted Child", page:"gifted.html", progress:0, lock:false },
        { title:"RTE Act 2009", page:"rte.html", progress:0, lock:false }
      ]
    },

    {
      group:"Motivation",
      items:[
        { title:"Intrinsic vs Extrinsic Motivation", page:"motivation.html", progress:0, lock:false },
        { title:"Maslow Hierarchy of Needs", page:"maslow.html", progress:0, lock:false },
        { title:"Achievement Motivation", page:"achievement.html", progress:0, lock:false }
      ]
    },

    {
      group:"Assessment & Evaluation",
      items:[
        { title:"Formative Assessment", page:"formative.html", progress:0, lock:false },
        { title:"Summative Assessment", page:"summative.html", progress:0, lock:false },
        { title:"Diagnostic Test", page:"diagnostic.html", progress:0, lock:false },
        { title:"CCE", page:"cce.html", progress:0, lock:false },
        { title:"Bloom's Taxonomy", page:"bloom.html", progress:0, lock:false }
      ]
    }

  ],


  MATH:[

  {
    group:"Nature & Philosophy",
    items:[
      { title:"Nature & Aims", page:"THEORY/theory.html?folder=MATH&topic=mathNature", progress:0, lock:false }
    ]
  },

  {
    group:"Learning Theories",
    items:[
      { title:"Learning Theories in Math", page:"THEORY/theory.html?folder=MATH&topic=mathTheories", progress:0, lock:false }
    ]
  },

  {
    group:"Teaching Methods",
    items:[
      { title:"Teaching Methods", page:"THEORY/theory.html?folder=MATH&topic=mathMethods", progress:0, lock:false }
    ]
  },

  {
    group:"Learning Resources & TLM",
    items:[
      { title:"TLM & ICT", page:"THEORY/theory.html?folder=MATH&topic=mathTLM", progress:0, lock:false }
    ]
  },

  {
    group:"Assessment & Evaluation",
    items:[
      { title:"Assessment in Math", page:"THEORY/theory.html?folder=MATH&topic=mathAssessment", progress:0, lock:false }
    ]
  },

  {
    group:"Error Analysis & Misconceptions",
    items:[
      { title:"Error Analysis", page:"THEORY/theory.html?folder=MATH&topic=mathErrors", progress:0, lock:false }
    ]
  },

  {
    group:"Inclusive Mathematics Education",
    items:[
      { title:"Inclusive Math Classroom", page:"THEORY/theory.html?folder=MATH&topic=mathInclusion", progress:0, lock:false }
    ]
  },

  {
    group:"Curriculum & Policies",
    items:[
      { title:"Curriculum & Policy", page:"THEORY/theory.html?folder=MATH&topic=mathPolicy", progress:0, lock:false }
    ]
  },

  {
    group:"Content Pedagogy (Class 1–5)",
    items:[
      { title:"Content Pedagogy", page:"THEORY/theory.html?folder=MATH&topic=mathContent", progress:0, lock:false }
    ]
  }

],
EVS:[

{
  group:"NCERT EVS (Class 3–5)",
  items:[
    { title:"📘 NCERT EVS (Class 3–5)", page:"THEORY/theory.html?folder=EVS&topic=evsChapters", progress:0, lock:false },
    { title:"🌍 Environmental Themes", page:"THEORY/theory.html?folder=EVS&topic=evsEnvironment", progress:0, lock:false },
    { title:"👩‍🎓 Gender & Inclusion Stories", page:"THEORY/theory.html?folder=EVS&topic=evsStories", progress:0, lock:false },
    { title:"🚆 Migration & Livelihood", page:"THEORY/theory.html?folder=EVS&topic=evsAdaption", progress:0, lock:false },
    { title:"🏔 Adaptation & Climate", page:"THEORY/theory.html?folder=EVS&topic=evsMigration", progress:0, lock:false },
    { title:"♻ Resources & Conservation", page:"THEORY/theory.html?folder=EVS&topic=evsResources", progress:0, lock:false }
  ]
},

  {
    group:"EVS Pedagogy",
    items:[
      { title:"Nature & Scope of EVS", page:"THEORY/theory.html?folder=EVS&topic=evsNature", progress:0, lock:false },
      { title:"Aims & Objectives", page:"THEORY/theory.html?folder=EVS&topic=evsAims", progress:0, lock:false },
      { title:"Integrated Approach", page:"THEORY/theory.html?folder=EVS&topic=evsIntegrated", progress:0, lock:false },
      { title:"Constructivism in EVS", page:"THEORY/theory.html?folder=EVS&topic=evsConstructivism", progress:0, lock:false },
      { title:"Teaching Methods", page:"THEORY/theory.html?folder=EVS&topic=evsAdaption", progress:0, lock:false },
      { title:"Assessment in EVS", page:"THEORY/theory.html?folder=EVS&topic=evsAssessment", progress:0, lock:false },
      { title:"TLM & Activity Based Learning", page:"THEORY/theory.html?folder=EVS&topic=evsTLM", progress:0, lock:false },
      { title:"Learning Difficulties in EVS", page:"THEORY/theory.html?folder=EVS&topic=evsDifficulties", progress:0, lock:false },
      { title:"Environmental Sensitivity", page:"THEORY/theory.html?folder=EVS&topic=evsSensitivity", progress:0, lock:false }
    ]
  }

],
BENGALI:[

{
  group:"Language Pedagogy (ভাষা শিক্ষণ)",
  items:[
    { title:"Nature of Language", page:"THEORY/theory.html?folder=Bengali&topic=bengaliNature", progress:0, lock:false },
    { title:"Objectives of Language Teaching", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageObjectives", progress:0, lock:false },
    { title:"Language Acquisition vs Language Learning", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageAcquisition", progress:0, lock:false },
    { title:"Principles of Language Teaching", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguagePrinciples", progress:0, lock:false },
    { title:"Constructivism in Language Teaching", page:"THEORY/theory.html?folder=Bengali&topic=bengaliConstructivism", progress:0, lock:false },
    { title:"Role of Teacher in Language Classroom", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTeacherRole", progress:0, lock:false }
  ]
},

{
  group:"Language Skills (LSRW)",
  items:[
    { title:"Listening Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliListeningSkill", progress:0, lock:false },
    { title:"Speaking Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliSpeakingSkill", progress:0, lock:false },
    { title:"Reading Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliReadingSkill", progress:0, lock:false },
    { title:"Writing Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliWritingSkill", progress:0, lock:false }
  ]
},

{
  group:"Teaching Approaches & Methods",
  items:[
    { title:"Grammar Translation Method", page:"THEORY/theory.html?folder=Bengali&topic=bengaliGTM", progress:0, lock:false },
    { title:"Direct Method", page:"THEORY/theory.html?folder=Bengali&topic=bengaliDirectMethod", progress:0, lock:false },
    { title:"Communicative Approach", page:"THEORY/theory.html?folder=Bengali&topic=bengaliCommunicativeApproach", progress:0, lock:false },
    { title:"Activity Based Learning", page:"THEORY/theory.html?folder=Bengali&topic=bengaliABL", progress:0, lock:false }

    
  ]
},

{
  group:"Language in Classroom Context",
  items:[
    { title:"Multilingualism", page:"THEORY/theory.html?folder=Bengali&topic=bengaliMultilingualism", progress:0, lock:false },
    { title:"Language Across Curriculum", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageAcrossCurriculum", progress:0, lock:false },
    { title:"Language Errors", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageErrors", progress:0, lock:false },
    { title:"Language & Thinking", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageThinking", progress:0, lock:false },
    { title:"Error Analysis & Correction", page:"THEORY/theory.html?folder=Bengali&topic=bengaliErrorCorrection", progress:0, lock:false }
  ]
},

{
  group:"Teaching Support",
  items:[
    { title:"Teaching Learning Material (TLM)", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTLM", progress:0, lock:false },
    { title:"Remedial Teaching", page:"THEORY/theory.html?folder=Bengali&topic=bengaliRemedialTeaching", progress:0, lock:false },
    { title:"Language Games", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageGames", progress:0, lock:false },
    { title:"Characteristics of Good Language Textbook", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTextbook", progress:0, lock:false }
  ]
},

{
  group:"Teaching of Language Components",
  items:[
    { title:"Teaching of Listening", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTeachingListening", progress:0, lock:false },
    { title:"Teaching of Speaking", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTeachingSpeaking", progress:0, lock:false },
    { title:"Teaching of Grammar", page:"THEORY/theory.html?folder=Bengali&topic=bengaliGrammarTeaching", progress:0, lock:false },
    { title:"Teaching of Vocabulary", page:"THEORY/theory.html?folder=Bengali&topic=bengaliVocabularyTeaching", progress:0, lock:false },
    { title:"Teaching of Reading", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTeachingReading", progress:0, lock:false },
    { title:"Teaching of Writing", page:"THEORY/theory.html?folder=Bengali&topic=bengaliTeachingWriting", progress:0, lock:false }
  ]
},

{
  group:"Assessment & Evaluation",
  items:[
    { title:"Formative Assessment", page:"THEORY/theory.html?folder=Bengali&topic=bengaliFormativeAssessment", progress:0, lock:false },
    { title:"Summative Assessment", page:"THEORY/theory.html?folder=Bengali&topic=bengaliSummativeAssessment", progress:0, lock:false },
    { title:"Diagnostic Test", page:"THEORY/theory.html?folder=Bengali&topic=bengaliDiagnosticTest", progress:0, lock:false },
    { title:"CCE in Language", page:"THEORY/theory.html?folder=Bengali&topic=bengaliContinuousEvaluation", progress:0, lock:false },
    { title:"Evaluation of Language Skills", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageEvaluation", progress:0, lock:false },
        { title:"Assessment", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageAssessment", progress:0, lock:false }
  ]
},

{
  group:"Vocabulary & Grammar",
  items:[
    { title:"Synonym (সমার্থক শব্দ)", page:"THEORY/theory.html?folder=Bengali&topic=bengaliSynonym", progress:0, lock:false },
    { title:"Antonym (বিপরীত শব্দ)", page:"THEORY/theory.html?folder=Bengali&topic=bengaliAntonym", progress:0, lock:false },
    { title:"Idioms (বাগধারা)", page:"THEORY/theory.html?folder=Bengali&topic=bengaliIdioms", progress:0, lock:false },
    { title:"Sentence Correction", page:"THEORY/theory.html?folder=Bengali&topic=bengaliSentenceCorrection", progress:0, lock:false }
  ]
},

{
  group:"Reading Comprehension",
  items:[
    { title:"Prose Comprehension", page:"THEORY/theory.html?folder=Bengali&topic=bengaliProseComprehension", progress:0, lock:false },
    { title:"Poetry Comprehension", page:"THEORY/theory.html?folder=Bengali&topic=bengaliPoetryComprehension", progress:0, lock:false }
  ]
}

],
ENGLISH:[

{
  group:"Language Pedagogy",
  items:[
    { title:"Nature of Language", page:"ENGLISH/english-nature.html", progress:0, lock:false },
    { title:"Language Acquisition vs Learning", page:"ENGLISH/english-acquisition.html", progress:0, lock:false },
    { title:"Principles of Language Teaching", page:"ENGLISH/english-principles.html", progress:0, lock:false },
    { title:"Constructivism in Language Teaching", page:"ENGLISH/english-constructivism.html", progress:0, lock:false },
    { title:"Role of Teacher in Language Classroom", page:"ENGLISH/english-teacher-role.html", progress:0, lock:false }
  ]
},

{
  group:"Language Skills (LSRW)",
  items:[
    { title:"Listening Skill", page:"ENGLISH/english-listening.html", progress:0, lock:false },
    { title:"Speaking Skill", page:"ENGLISH/english-speaking.html", progress:0, lock:false },
    { title:"Reading Skill", page:"ENGLISH/english-reading.html", progress:0, lock:false },
    { title:"Writing Skill", page:"ENGLISH/english-writing.html", progress:0, lock:false }
  ]
},

{
  group:"Teaching Methods",
  items:[
    { title:"Grammar Translation Method", page:"ENGLISH/english-gtm.html", progress:0, lock:false },
    { title:"Direct Method", page:"ENGLISH/english-direct.html", progress:0, lock:false },
    { title:"Communicative Approach", page:"ENGLISH/english-communicative.html", progress:0, lock:false },
    { title:"Activity Based Learning", page:"ENGLISH/english-abl.html", progress:0, lock:false }
  ]
},

{
  group:"Assessment in Language",
  items:[
    { title:"Formative Assessment", page:"ENGLISH/english-formative.html", progress:0, lock:false },
    { title:"Summative Assessment", page:"ENGLISH/english-summative.html", progress:0, lock:false },
    { title:"Diagnostic Test", page:"ENGLISH/english-diagnostic.html", progress:0, lock:false },
    { title:"CCE in Language", page:"ENGLISH/english-cce.html", progress:0, lock:false }
  ]
},

{
  group:"Grammar & Vocabulary",
  items:[
    { title:"Parts of Speech", page:"ENGLISH/english-parts.html", progress:0, lock:false },
    { title:"Tense", page:"ENGLISH/english-tense.html", progress:0, lock:false },
    { title:"Active & Passive Voice", page:"ENGLISH/english-voice.html", progress:0, lock:false },
    { title:"Direct & Indirect Speech", page:"ENGLISH/english-speech.html", progress:0, lock:false },
    { title:"Synonyms & Antonyms", page:"ENGLISH/english-synonym.html", progress:0, lock:false },
    { title:"Idioms & Phrases", page:"ENGLISH/english-idioms.html", progress:0, lock:false }
  ]
},

{
  group:"Reading Comprehension",
  items:[
    { title:"Prose Comprehension", page:"ENGLISH/english-prose.html", progress:0, lock:false },
    { title:"Poetry Comprehension", page:"ENGLISH/english-poetry.html", progress:0, lock:false }
  ]
}

]

},

UPPER:{

CDP:[

{
group:"Child Development",
items:[
{ title:"Concept of Development", page:"cdpDevelopment.html", progress:0, lock:false },
{ title:"Growth vs Development", page:"growth-development.html", progress:0, lock:false },
{ title:"Principles of Development", page:"principles.html", progress:0, lock:false },
{ title:"Heredity & Environment", page:"heredity.html", progress:0, lock:false },
{ title:"Individual Differences", page:"individual-difference.html", progress:0, lock:false }
]
},

{
group:"Development Theories",
items:[
{ title:"Jean Piaget Theory", page:"THEORY/theory.html?folder=CDP&topic=piaget", progress:0, lock:false },
{ title:"Lev Vygotsky Theory", page:"THEORY/theory.html?folder=CDP&topic=vygotsky", progress:0, lock:false },
{ title:"Kohlberg Moral Development", page:"THEORY/theory.html?folder=CDP&topic=Kohlberg", progress:0, lock:false },
{ title:"Erikson Psychosocial Theory", page:"THEORY/theory.html?folder=CDP&topic=erikson", progress:0, lock:false }
]
},

{
group:"Learning Theories",
items:[
{ title:"Pavlov Classical Conditioning", page:"pavlov.html", progress:0, lock:false },
{ title:"Thorndike Trial & Error", page:"thorndike.html", progress:0, lock:false },
{ title:"Skinner Operant Conditioning", page:"skinner.html", progress:0, lock:false },
{ title:"Bandura Social Learning", page:"bandura.html", progress:0, lock:false }
]
},

{
group:"Inclusive Education",
items:[
{ title:"CWSN Concept", page:"cwsn.html", progress:0, lock:false },
{ title:"ADHD", page:"adhd.html", progress:0, lock:false },
{ title:"Dyslexia", page:"dyslexia.html", progress:0, lock:false },
{ title:"Autism", page:"autism.html", progress:0, lock:false },
{ title:"Gifted Child", page:"gifted.html", progress:0, lock:false }
]
}

],

MATH:[

{
group:"Nature of Mathematics",
items:[
{ title:"Nature & Aims of Mathematics", page:"THEORY/theory.html?folder=MATH&topic=mathNature", progress:0, lock:false },
{ title:"Mathematics Curriculum", page:"mathCurriculum.html", progress:0, lock:false }
]
},

{
group:"Mathematics Teaching",
items:[
{ title:"Teaching Methods", page:"THEORY/theory.html?folder=MATH&topic=mathMethods", progress:0, lock:false },
{ title:"Error Analysis", page:"THEORY/theory.html?folder=MATH&topic=mathErrors", progress:0, lock:false },
{ title:"Assessment in Mathematics", page:"THEORY/theory.html?folder=MATH&topic=mathAssessment", progress:0, lock:false }
]
}

],

SCIENCE:[

{
group:"Nature of Science",
items:[
{ title:"Nature & Structure of Science", page:"scienceNature.html", progress:0, lock:false },
{ title:"Science Curriculum", page:"scienceCurriculum.html", progress:0, lock:false }
]
},

{
group:"Science Teaching",
items:[
{ title:"Teaching Methods", page:"scienceMethods.html", progress:0, lock:false },
{ title:"Science Experiments", page:"scienceExperiments.html", progress:0, lock:false },
{ title:"Science Laboratory", page:"scienceLab.html", progress:0, lock:false }
]
},

{
group:"Science Assessment",
items:[
{ title:"Evaluation in Science", page:"scienceEvaluation.html", progress:0, lock:false }
]
}

],

SOCIAL:[

{
group:"History Pedagogy",
items:[
{ title:"Nature of History", page:"historyNature.html", progress:0, lock:false },
{ title:"Sources of History", page:"historySources.html", progress:0, lock:false }
]
},

{
group:"Geography Pedagogy",
items:[
{ title:"Nature of Geography", page:"geographyNature.html", progress:0, lock:false },
{ title:"Maps & Globe", page:"mapsGlobe.html", progress:0, lock:false }
]
},

{
group:"Social Science Teaching",
items:[
{ title:"Teaching Methods", page:"socialMethods.html", progress:0, lock:false },
{ title:"Charts & Models", page:"chartsModels.html", progress:0, lock:false },
{ title:"Assessment in Social Science", page:"socialAssessment.html", progress:0, lock:false }
]
}

],

ENGLISH:[

{
group:"Language Pedagogy",
items:[
{ title:"Nature of Language", page:"ENGLISH/english-nature.html", progress:0, lock:false },
{ title:"Language Acquisition vs Learning", page:"ENGLISH/english-acquisition.html", progress:0, lock:false },
{ title:"Principles of Language Teaching", page:"ENGLISH/english-principles.html", progress:0, lock:false },
{ title:"Constructivism in Language Teaching", page:"ENGLISH/english-constructivism.html", progress:0, lock:false }
]
},

{
group:"Language Skills",
items:[
{ title:"Listening Skill", page:"ENGLISH/english-listening.html", progress:0, lock:false },
{ title:"Speaking Skill", page:"ENGLISH/english-speaking.html", progress:0, lock:false },
{ title:"Reading Skill", page:"ENGLISH/english-reading.html", progress:0, lock:false },
{ title:"Writing Skill", page:"ENGLISH/english-writing.html", progress:0, lock:false }
]
}

],

BENGALI:[

{
group:"Language Pedagogy",
items:[
{ title:"Nature of Language", page:"THEORY/theory.html?folder=Bengali&topic=bengaliNature", progress:0, lock:false },
{ title:"Language Acquisition", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguageAcquisition", progress:0, lock:false },
{ title:"Principles of Language Teaching", page:"THEORY/theory.html?folder=Bengali&topic=bengaliLanguagePrinciples", progress:0, lock:false }
]
},

{
group:"Language Skills",
items:[
{ title:"Listening Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliListeningSkill", progress:0, lock:false },
{ title:"Speaking Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliSpeakingSkill", progress:0, lock:false },
{ title:"Reading Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliReadingSkill", progress:0, lock:false },
{ title:"Writing Skill", page:"THEORY/theory.html?folder=Bengali&topic=bengaliWritingSkill", progress:0, lock:false }
]
}

]

}
};


/* ======================
ICON COLOR AUTO
====================== */

function getColor(sub){

  const map = {

  CDP:"#42a5f5",
  MATH:"#66bb6a",
  EVS:"#26c6da",
  SCIENCE:"#26c6da",
  SOCIAL:"#ff7043",
  ENGLISH:"#ab47bc",
  BENGALI:"#ef5350"

};

  return map[sub] || "#1e88e5";
}


/* ======================
CHANGE SUBJECT
====================== */

window.changeSubject =
function(ev,sub){

  document
    .querySelectorAll(".tab")
    .forEach(t =>
      t.classList.remove("active")
    );

  ev.currentTarget
    .classList.add("active");

  renderConcepts(sub);
};

/* ======================
CHANGE LEVEL
====================== */

window.changeLevel =
function(level){

localStorage.setItem("ctetLevel",level);

/* reset subject */
localStorage.setItem("activeSubject","CDP");

location.reload();

};



/* ======================
RENDER
====================== */

function renderConcepts(sub){
  sub = sub.trim();

  const list = document.getElementById("conceptList");
  const title = document.getElementById("subjectTitle");
  const icons = {
    CDP:"🧠",
    MATH:"📐",
    EVS:"🌍",
    SCIENCE:"🧪",
    SOCIAL:"🌎",
    ENGLISH:"🔤",
    BENGALI:"📝"
  };

  // 🔥 Save current subject
  localStorage.setItem("activeSubject", sub);

  title.innerText = `${icons[sub] || "📘"} ${sub} Concepts`;
  list.innerHTML = "";
  // 🔥 Apply Subject Theme
document.body.setAttribute("data-subject", sub);

  const data =
(subjectData[CTET_LEVEL] &&
subjectData[CTET_LEVEL][sub]) || [];

if(!data.length){

list.innerHTML = `
<div class="empty-state">
📭 No concepts available
</div>
`;

return;
}


  // 🔥 Load tab-wise progress
  const tabData =
    JSON.parse(localStorage.getItem("tabProgress")) || {};

  // 🔥 Load saved open group (subject wise)
  const savedGroup =
    localStorage.getItem("openGroup_" + sub);

  data.forEach((group,index)=>{
    const count = group.items.length;

    // 🔹 GROUP CARD
    const groupDiv = document.createElement("div");
    groupDiv.className = "group-card";

    groupDiv.innerHTML = `
  <span>📂 ${group.group}
    <span class="badge">${count}</span>
  </span>
  <span class="group-arrow" id="arrow-${index}">▼</span>
`;

    // 🔹 CHILD CONTAINER
    const childContainer = document.createElement("div");
    childContainer.className = "child-container";
    childContainer.id = `child-${index}`;
    childContainer.style.height = "0px";

    group.items.forEach(c=>{
      
      // 🔥 Calculate final progress
      let finalProgress = c.progress;

      const key = c.page;

if(tabData && tabData[key]){

  const tabs = Object.values(tabData[key]);

  if(Array.isArray(tabs) && tabs.length){

    const total = tabs.reduce((a,b)=>a + Number(b || 0),0);

    finalProgress = Math.round(total / tabs.length);
  }

}

      const div = document.createElement("div");
div.className = "card";

const lastOpened = localStorage.getItem("lastOpened");

if(lastOpened === c.page){

  div.classList.add("last-active");

  setTimeout(()=>{
    div.scrollIntoView({
      behavior:"smooth",
      block:"center"
    });
  },300);

}

      div.onclick = e=>{
        e.stopPropagation();

        rippleEffect(e,div);

        if(c.lock){
          alert("🔒 Premium locked");
          return;
        }

        // 🔥 Save last opened page
localStorage.setItem("lastOpened", c.page);

setTimeout(()=>{
  location.href = c.page;
},200);
      };

      div.innerHTML = `
        <div class="icon"
             style="background:${getColor(sub)}">
          📘
        </div>

        <div style="flex:1;">
          ${c.title}
        </div>

        <div class="progress"
             style="--value:${finalProgress}%">
          ${finalProgress}%
        </div>
      `;

      childContainer.appendChild(div);
    });

    // 🔹 TOGGLE LOGIC
    groupDiv.onclick = ()=>{

      const allContainers =
        document.querySelectorAll(".child-container");

      const allArrows =
        document.querySelectorAll(".group-arrow");

      allContainers.forEach(c=>{
        if(c !== childContainer){
          c.style.height = "0px";
        }
      });

      allArrows.forEach(a=>{
        a.classList.remove("rotate");
      });

      if(childContainer.style.height &&
         childContainer.style.height !== "0px"){

        childContainer.style.height = "0px";

        // 🔥 Remove saved group
        localStorage.removeItem("openGroup_" + sub);

      }else{

        childContainer.style.height =
          childContainer.scrollHeight + "px";

        document
          .getElementById(`arrow-${index}`)
          .classList.add("rotate");

        // 🔥 Save open group
        localStorage.setItem(
          "openGroup_" + sub,
          index
        );
      }

    };

    list.appendChild(groupDiv);
    list.appendChild(childContainer);

    // 🔥 AUTO OPEN SAVED GROUP
    if(savedGroup == index){

      setTimeout(()=>{
        childContainer.style.height =
          childContainer.scrollHeight + "px";

        document
          .getElementById(`arrow-${index}`)
          .classList.add("rotate");
      },50);
    }

  });
}


/* ======================
RIPPLE EFFECT
====================== */

function rippleEffect(e,el){

  const circle =
    document.createElement("span");

  circle.classList.add("ripple");

  const rect =
    el.getBoundingClientRect();

  const size =
    Math.max(rect.width,
             rect.height);

  circle.style.width =
  circle.style.height =
    size + "px";

  circle.style.left =
    e.clientX - rect.left
    - size/2 + "px";

  circle.style.top =
    e.clientY - rect.top
    - size/2 + "px";

  el.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  },600);
}


/* ======================
UPDATE TABS BY LEVEL
====================== */

function updateTabs(){

const tabs = document.querySelector(".tabs");

if(!tabs) return;

if(CTET_LEVEL === "UPPER"){

tabs.innerHTML = `

<button class="tab active"
onclick="changeSubject(event,'CDP')">
CDP
</button>

<button class="tab"
onclick="changeSubject(event,'MATH')">
MATH
</button>

<button class="tab"
onclick="changeSubject(event,'SCIENCE')">
SCIENCE
</button>

<button class="tab"
onclick="changeSubject(event,'SOCIAL')">
SOCIAL
</button>

<button class="tab"
onclick="changeSubject(event,'ENGLISH')">
ENGLISH
</button>

<button class="tab"
onclick="changeSubject(event,'BENGALI')">
BENGALI
</button>

`;

}

}

/* ======================
LEVEL ACTIVE UI
====================== */

function updateLevelUI(){

const p = document.getElementById("level-primary");
const u = document.getElementById("level-upper");

if(!p || !u) return;

p.classList.remove("active");
u.classList.remove("active");

if(CTET_LEVEL === "PRIMARY"){
  p.classList.add("active");
}

if(CTET_LEVEL === "UPPER"){
  u.classList.add("active");
}

}

/* ======================
DEFAULT LOAD
====================== */

updateTabs();
updateLevelUI();

let saved =
localStorage.getItem("activeSubject") || "CDP";

/* 🔥 Fix subject mismatch between PRIMARY / UPPER */

if(!subjectData[CTET_LEVEL] ||
   !subjectData[CTET_LEVEL][saved]){

  saved = Object.keys(subjectData[CTET_LEVEL])[0];
}

renderConcepts(saved);

/* 🔥 Active tab auto set */
document.querySelectorAll(".tab")
.forEach(tab=>{

const sub =
tab.getAttribute("onclick")
.match(/'([^']+)'/)[1];

if(sub === saved){
tab.classList.add("active");
}else{
tab.classList.remove("active");
}

});


/* 🔥 Fix Back Button Highlight + Auto Scroll */

window.addEventListener("pageshow", ()=>{

  let saved =
    localStorage.getItem("activeSubject") || "CDP";

  if(!subjectData[CTET_LEVEL][saved]){
    saved = "CDP";
  }

  renderConcepts(saved);

  document.querySelectorAll(".tab")
.forEach(tab=>{

const sub =
tab.getAttribute("onclick")
.match(/'([^']+)'/)[1];

if(sub === saved){
tab.classList.add("active");
}else{
tab.classList.remove("active");
}

});

});