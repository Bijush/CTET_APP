import { getPedagogyProfile } from "../utils/pedagogy_ai.js";


/* ======================
🧠 PEDAGOGY POPUP
====================== */

export function showConceptPedagogy(concept){

  const pedagogy = getPedagogyProfile({
    concept: concept
  }) || {};

  const box = document.createElement("div");
  box.className = "concept-popup";

  box.innerHTML = `
    <div class="concept-card">

      <h3>🧠 Pedagogy Intelligence</h3>

      <div class="ped-grid">

        <div class="ped-card">
          🧠 Bloom’s Level<br>
          ${pedagogy.bloom || "—"}
        </div>

        <div class="ped-card">
          👶 Piaget Stage<br>
          ${pedagogy.piaget || "—"}
        </div>

        <div class="ped-card">
          👥 Vygotsky Link<br>
          ${pedagogy.vygotsky || "—"}
        </div>

        <div class="ped-card">
          🧱 Constructivism<br>
          ${pedagogy.constructivism || "—"}
        </div>

      </div>

      <button onclick="this.closest('.concept-popup').remove()">
        Close
      </button>

    </div>
  `;

  document.body.appendChild(box);
}


/* ======================
🧠 TRACK WEAK CONCEPT
====================== */

export function trackWeakConcept(concept, isWrong){

  if(!concept) return;

  let data =
    JSON.parse(
      localStorage.getItem("weakConcepts")
    ) || {};

  if(!data[concept]){
    data[concept] = {
      total: 0,
      wrong: 0
    };
  }

  data[concept].total++;

  if(isWrong){
    data[concept].wrong++;
  }

  localStorage.setItem(
    "weakConcepts",
    JSON.stringify(data)
  );
}


/* ======================
🧠 CHECK WEAK CONCEPT
====================== */

export function isWeakConcept(concept){

  let data =
    JSON.parse(
      localStorage.getItem("weakConcepts")
    ) || {};

  if(!data[concept]) return false;

  const total = data[concept].total;
  const wrong = data[concept].wrong;

  const accuracy =
    ((total - wrong) / total) * 100;

  return accuracy < 60;
}