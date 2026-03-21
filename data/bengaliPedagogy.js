import { registerData }
from "../engine/bookmark_engine.js";

export const benglaPedagogy = [

{
  id: "mcq_bengali_pedagogy_01",
  type: "MCQ",
  subject: "Bengali Pedagogy",

  q_en: "What is the main objective of language teaching?",
  q_bn: "ভাষা শিক্ষার প্রধান উদ্দেশ্য কী?",

  options_en: [
    "Memorizing grammar",
    "Developing communication skills",
    "Memorizing words",
    "Only learning writing"
  ],
  options_bn: [
    "ব্যাকরণ মুখস্থ করানো",
    "যোগাযোগ দক্ষতা উন্নয়ন",
    "শব্দ মুখস্থ করানো",
    "শুধু লেখা শেখানো"
  ],

  ans: 1,

  ans_reason_en: "The main aim of language teaching is to develop communication skills.",
  ans_reason_bn: "ভাষা শিক্ষার মূল লক্ষ্য হল যোগাযোগ দক্ষতা বৃদ্ধি করা।",

  elimination_en: [
    "❌ Grammar alone is not enough",
    "✅ Correct answer",
    "❌ Rote learning is not effective",
    "❌ Limited skill"
  ],
  elimination_bn: [
    "❌ শুধু ব্যাকরণ যথেষ্ট নয়",
    "✅ সঠিক উত্তর",
    "❌ মুখস্থভিত্তিক শিক্ষা নয়",
    "❌ সীমাবদ্ধ দক্ষতা"
  ],

  difficulty: "easy",
  concept: "Language Teaching Objective",
  exam: "CTET",
  year: 2022
},

{
  id: "mcq_bengali_pedagogy_02",
  type: "MCQ",
  subject: "Bengali Pedagogy",

  q_en: "Which type of skill is 'listening' in language learning?",
  q_bn: "ভাষা শিক্ষায় 'শ্রবণ' কোন ধরনের দক্ষতা?",

  options_en: [
    "Productive skill",
    "Receptive skill",
    "Creative skill",
    "Motor skill"
  ],
  options_bn: [
    "Productive skill",
    "Receptive skill",
    "Creative skill",
    "Motor skill"
  ],

  ans: 1,

  ans_reason_en: "Listening is a receptive skill as it involves receiving language.",
  ans_reason_bn: "শ্রবণ হলো ভাষা গ্রহণের দক্ষতা, তাই এটি receptive skill।",

  elimination_en: [
    "❌ Not productive",
    "✅ Correct answer",
    "❌ Not applicable",
    "❌ Not applicable"
  ],
  elimination_bn: [
    "❌ উৎপাদনমূলক নয়",
    "✅ সঠিক উত্তর",
    "❌ প্রযোজ্য নয়",
    "❌ প্রযোজ্য নয়"
  ],

  difficulty: "easy",
  concept: "Language Skills",
  exam: "CTET",
  year: 2021
},

{
  id: "mcq_bengali_pedagogy_03",
  type: "MCQ",
  subject: "Bengali Pedagogy",

  q_en: "What is the most effective way for children to learn language?",
  q_bn: "শিশুদের ভাষা শেখার সবচেয়ে কার্যকর উপায় কোনটি?",

  options_en: [
    "Memorization",
    "Learning through environment and experience",
    "Only reading books",
    "Punishment"
  ],
  options_bn: [
    "মুখস্থ করা",
    "পরিবেশ ও অভিজ্ঞতার মাধ্যমে শেখা",
    "শুধু বই পড়া",
    "শাস্তি দেওয়া"
  ],

  ans: 1,

  ans_reason_en: "Children learn language best through environment and experience.",
  ans_reason_bn: "শিশুরা পরিবেশ ও অভিজ্ঞতার মাধ্যমে সবচেয়ে ভালো ভাষা শেখে।",

  elimination_en: [
    "❌ Not effective long-term",
    "✅ Correct answer",
    "❌ Limited approach",
    "❌ Negative method"
  ],
  elimination_bn: [
    "❌ মুখস্থ স্থায়ী নয়",
    "✅ সঠিক উত্তর",
    "❌ সীমিত পদ্ধতি",
    "❌ নেতিবাচক পদ্ধতি"
  ],

  difficulty: "easy",
  concept: "Language Acquisition",
  exam: "CTET",
  year: 2020
},

{
  id: "mcq_bengali_pedagogy_04",
  type: "MCQ",
  subject: "Bengali Pedagogy",

  q_en: "What does 'Scaffolding' mean in language teaching?",
  q_bn: "ভাষা শিক্ষায় 'Scaffolding' বলতে কী বোঝায়?",

  options_en: [
    "Teaching with punishment",
    "Providing support and gradually removing it",
    "Only taking exams",
    "Memorization"
  ],
  options_bn: [
    "শাস্তি দিয়ে শেখানো",
    "সহায়তা দিয়ে ধীরে ধীরে তা কমানো",
    "শুধু পরীক্ষা নেওয়া",
    "মুখস্থ করানো"
  ],

  ans: 1,

  ans_reason_en: "Scaffolding means giving temporary support and gradually removing it.",
  ans_reason_bn: "Scaffolding হলো সাময়িক সহায়তা প্রদান করে ধীরে ধীরে তা সরিয়ে নেওয়া।",

  elimination_en: [
    "❌ Wrong method",
    "✅ Correct answer",
    "❌ Evaluation method",
    "❌ Not effective"
  ],
  elimination_bn: [
    "❌ ভুল পদ্ধতি",
    "✅ সঠিক উত্তর",
    "❌ মূল্যায়ন পদ্ধতি",
    "❌ কার্যকর নয়"
  ],

  difficulty: "easy",
  concept: "Scaffolding",
  exam: "CTET",
  year: 2022
}

];

registerData("MCQ", benglaPedagogy);