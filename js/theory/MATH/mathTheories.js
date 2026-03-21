/* CREATE TABS */

createTabs([

{ id:"piaget", icon:"🧠", label:"Piaget" },

{ id:"vygotsky", icon:"🤝", label:"Vygotsky" },

{ id:"bruner", icon:"📚", label:"Bruner" },

{ id:"constructivism", icon:"🧩", label:"Constructivism" },

{ id:"behaviorism", icon:"🔁", label:"Behaviorism" },

{ id:"gagne", icon:"📊", label:"Gagne" }

]);


/* ======================
PIAGET
====================== */

function piagetTheory(){
return `

<div class="card">
<h3>🧠 Jean Piaget in Mathematics</h3>

<div class="feature-card">
Children construct knowledge actively.
<br><span class="feature-bn">
শিশুরা সক্রিয়ভাবে জ্ঞান গঠন করে।
</span>
</div>

<div class="feature-card">
Primary learners are mostly in Concrete Operational Stage (7–11 years).
<br><span class="feature-bn">
প্রাথমিক স্তরের শিশুরা Concrete Operational পর্যায়ে থাকে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Constructivism • Concrete Operational • TLM
</div>

</div>

`;
}


/* ======================
VYGOTSKY
====================== */

function vygotskyTheory(){
return `

<div class="card">
<h3>🤝 Lev Vygotsky in Mathematics</h3>

<div class="feature-card">
Learning happens through social interaction.
<br><span class="feature-bn">
শেখা সামাজিক মিথস্ক্রিয়ার মাধ্যমে ঘটে।
</span>
</div>

<div class="feature-card">
ZPD helps child solve problems with guidance.
<br><span class="feature-bn">
ZPD-এর মাধ্যমে শিশু সহায়তায় সমস্যা সমাধান করে।
</span>
</div>

<div class="feature-card">
Scaffolding supports gradual independence.
<br><span class="feature-bn">
Scaffolding ধীরে ধীরে স্বনির্ভরতা বাড়ায়।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Guided learning • Peer learning
</div>

</div>

`;
}


/* ======================
BRUNER
====================== */

function brunerTheory(){
return `

<div class="card">
<h3>📚 Jerome Bruner in Mathematics</h3>

<div class="feature-card">
Enactive → Iconic → Symbolic learning stages.
<br><span class="feature-bn">
কাজ → ছবি → প্রতীক ধাপ।
</span>
</div>

<div class="feature-card">
Spiral curriculum revisits concepts deeply.
<br><span class="feature-bn">
Spiral curriculum একই ধারণা উচ্চতর স্তরে শেখায়।
</span>
</div>

<div class="feature-ctet">
CTET Line: Discovery learning
</div>

</div>

`;
}


/* ======================
CONSTRUCTIVISM
====================== */

function constructivismTheory(){
return `

<div class="card">
<h3>🧩 Constructivism in Math Classroom</h3>

<div class="feature-card">
Students build their own understanding.
<br><span class="feature-bn">
শিক্ষার্থীরা নিজেরাই ধারণা গঠন করে।
</span>
</div>

<div class="feature-card">
Teacher acts as facilitator.
<br><span class="feature-bn">
শিক্ষক সহায়ক হিসেবে কাজ করেন।
</span>
</div>

<div class="feature-card">
Errors are part of learning.
<br><span class="feature-bn">
ভুল শেখার অংশ।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Rote learning ❌
</div>

</div>

`;
}


/* ======================
BEHAVIORISM
====================== */

function behaviorismTheory(){
return `

<div class="card">
<h3>🔁 Behaviorism in Mathematics</h3>

<div class="feature-card">
Learning through reinforcement and practice.
<br><span class="feature-bn">
অনুশীলন ও পুনর্বলনের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Drill and practice method.
<br><span class="feature-bn">
Drill পদ্ধতি।
</span>
</div>

<div class="feature-ctet">
CTET Line: Skinner • Reinforcement
</div>

</div>

`;
}


/* ======================
GAGNE
====================== */

function gagneTheory(){
return `

<div class="card">
<h3>📊 Gagne’s Hierarchy in Mathematics</h3>

<div class="feature-card">
Learning occurs in hierarchical order.
<br><span class="feature-bn">
শেখা ধাপে ধাপে হয়।
</span>
</div>

<div class="feature-card">
Simple → Complex progression.
<br><span class="feature-bn">
সহজ থেকে জটিল।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Sequential learning
</div>

</div>

`;
}



/* ======================
EXPORT THEORY
====================== */

window.theoryContent = {

piaget: piagetTheory(),
vygotsky: vygotskyTheory(),
bruner: brunerTheory(),
constructivism: constructivismTheory(),
behaviorism: behaviorismTheory(),
gagne: gagneTheory()

};