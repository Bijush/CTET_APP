export const QUESTIONS = [
  {
    "id": 9011,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Doctors are Educated",
      "Some Educated are Writers",
      "No Writers are Engineers"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Doctors", "Educated", "Writers", "Engineers"],
      "relations": [
        { "left": "Doctors", "right": "Educated", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Educated", "right": "Writers", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Writers", "right": "Engineers", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Doctors are Writers",
      "No Engineers are Doctors"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 3,
    "explanation": "No conclusion follows."
  },
  {
    "id": 5,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Cats are Dogs",
      "Some Dogs are Rats",
      "No Rat is a Bat"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Cats", "Dogs", "Rats", "Bats"],
      "relations": [
        { "left": "Cats", "right": "Dogs", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Dogs", "right": "Rats", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Rats", "right": "Bats", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Cats are not Bats",
      "Some Dogs are definitely Bats"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows"
    ],
    "answer": 3,
    "explanation": "Neither conclusion follows. There is no direct connection given between Cats and Bats, so Conclusion I is not definite. For Conclusion II, while some Dogs are Rats and no Rat is a Bat, the remaining part of Dogs could or could not be Bats, making it uncertain."
  },
  {
    "id": 6,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Only a few Pens are Pencils",
      "All Pencils are Erasers",
      "Some Erasers are Books"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Pens", "Pencils", "Erasers", "Books"],
      "relations": [
        { "left": "Pens", "right": "Pencils", "type": "only_a_few", "mode": "overlap", "priority": 80 },
        { "left": "Pencils", "right": "Erasers", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Erasers", "right": "Books", "type": "some", "mode": "overlap", "priority": 70 }
      ]
    },
    "conclusions": [
      "Some Books are Pencils is a possibility",
      "All Erasers being Pens is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. There is no restriction preventing Books and Pencils from overlapping, so Conclusion I is a valid possibility. For Conclusion II, all Erasers can move inside Pens without violating the 'only a few Pens are Pencils' restriction (which only stops all Pens from becoming Pencils)."
  },
  {
    "id": 7,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Tables are Chairs",
      "Some Chairs are Sofas",
      "No Sofa is a Stool"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Tables", "Chairs", "Sofas", "Stools"],
      "relations": [
        { "left": "Tables", "right": "Chairs", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Chairs", "right": "Sofas", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Sofas", "right": "Stools", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Tables are Sofas",
      "No Table is a Sofa"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "This forms an Either-Or case. Both conclusions are individually false because Tables and Sofas may or may not overlap. Since they share the same subject and predicate, and form a complementary pair (Some + No), one of them must logically be true."
  },
  {
    "id": 8,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Some Apples are Oranges",
      "All Oranges are Bananas",
      "No Banana is Grapes"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Apples", "Oranges", "Bananas", "Grapes"],
      "relations": [
        { "left": "Apples", "right": "Oranges", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Oranges", "right": "Bananas", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Bananas", "right": "Grapes", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Apples are not Bananas",
      "Some Oranges are not Grapes"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 1,
    "explanation": "Only II follows. Since all Oranges are inside Bananas, and no Banana can touch Grapes, it is absolutely true that No Orange is Grapes, which inherently means 'Some Oranges are not Grapes'. Conclusion I is false because all Apples could potentially be Bananas."
  },
  {
    "id": 9,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Only Cars are Buses",
      "Some Buses are Trucks",
      "All Trucks are Jeeps"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Buses", "Cars", "Trucks", "Jeeps"],
      "relations": [
        { "left": "Buses", "right": "Cars", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Buses", "right": "Trucks", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Trucks", "right": "Jeeps", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "Some Trucks are Cars",
      "All Trucks being Cars is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. 'Only Cars are Buses' translates to 'All Buses are Cars'. Since some Buses are Trucks, those particular Trucks are definitely Cars (Conclusion I). Also, all Trucks can easily fit inside the Car circle, making Conclusion II a valid possibility."
  },
  {
    "id": 10,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Only a few Rivers are Lakes",
      "Some Lakes are Oceans",
      "All Oceans are Seas"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Rivers", "Lakes", "Oceans", "Seas"],
      "relations": [
        { "left": "Rivers", "right": "Lakes", "type": "only_a_few", "mode": "overlap", "priority": 80 },
        { "left": "Lakes", "right": "Oceans", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Oceans", "right": "Seas", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "All Rivers being Lakes is a possibility",
      "Some Seas are Lakes"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 1,
    "explanation": "Only II follows. 'Only a few Rivers are Lakes' implies that some Rivers are definitely NOT Lakes, so all Rivers can never be Lakes (Conclusion I is false). Since all Oceans are Seas and some Lakes are Oceans, the overlapping part ensures some Seas are Lakes (Conclusion II is true)."
  },
  {
    "id": 11,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Envelopes are Letters",
      "Some Letters are Stamps",
      "No Stamp is a Parcel"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Envelopes", "Letters", "Stamps", "Parcels"],
      "relations": [
        { "left": "Envelopes", "right": "Letters", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Letters", "right": "Stamps", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Stamps", "right": "Parcels", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Letters are not Parcels",
      "All Envelopes being Parcels is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 0,
    "explanation": "Only I follows. The portion of Letters that overlaps with Stamps cannot be Parcels because No Stamp is a Parcel. Thus, Conclusion I is true. Since all Envelopes are Letters, and some Letters cannot be Parcels, it is still possible for Envelopes to completely avoid the Stamp section and be Parcels. The correct answer option for this logical structure is Only I follows if Envelopes were bound to Stamps, but here they are independent, making Only I true as a definite conclusion while II is a possibility."
  },
  {
    "id": 12,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Some Fruits are Vegetables",
      "Some Vegetables are Nuts",
      "All Nuts are Seeds"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Fruits", "Vegetables", "Nuts", "Seeds"],
      "relations": [
        { "left": "Fruits", "right": "Vegetables", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Vegetables", "right": "Nuts", "type": "some", "mode": "overlap", "priority": 70 },
        { "left": "Nuts", "right": "Seeds", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "Some Fruits are Nuts",
      "No Fruit is a Nut"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "This is an Either-Or case. There is no definitive relationship given between Fruits and Nuts, making both individual conclusions false. Since they share the same subject and predicate elements and form a complementary pair (Some + No), one of the conditions must hold true."
  },
  {
    "id": 13,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "Only a few Tables are Chairs",
      "No Chair is a Desk",
      "All Desks are Cabinets"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Tables", "Chairs", "Desks", "Cabinets"],
      "relations": [
        { "left": "Tables", "right": "Chairs", "type": "only_a_few", "mode": "overlap", "priority": 80 },
        { "left": "Chairs", "right": "Desks", "type": "no", "mode": "disjoint", "priority": 90 },
        { "left": "Desks", "right": "Cabinets", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "Some Tables are not Desks",
      "All Tables being Cabinets is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. The part of Tables that is Chairs can never be Desks because No Chair is a Desk, making Conclusion I true. Also, Tables can be entirely contained inside Cabinets without violating any rules, making Conclusion II a valid possibility."
  },
  {
    "id": 14,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Cats are Rats",
      "All Rats are Bats",
      "No Bat is an Owl"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Cats", "Rats", "Bats", "Owls"],
      "relations": [
        { "left": "Cats", "right": "Rats", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Rats", "right": "Bats", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Bats", "right": "Owls", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "Some Cats are not Owls",
      "No Cat is an Owl"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. Because all Cats are inside Rats, and all Rats are inside Bats, all Cats are inherently Bats. Since No Bat is an Owl, it strictly means No Cat is an Owl (Conclusion II is true). If 'No Cat is an Owl' is true, its sub-implication 'Some Cats are not Owls' (Conclusion I) must automatically be true."
  },
  {
    "id": 15,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Gold are Silver",
      "All Silver are Platinum",
      "All Platinum are Diamond"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Gold", "Silver", "Platinum", "Diamond"],
      "relations": [
        { "left": "Gold", "right": "Silver", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Silver", "right": "Platinum", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Platinum", "right": "Diamond", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "All Gold are Diamond",
      "All Diamond being Gold is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. Since Gold is completely inside Silver, Silver inside Platinum, and Platinum inside Diamond, Gold is automatically inside Diamond (Conclusion I is true). For Conclusion II, when all relations are positive 'All', all circles can potentially overlap completely into a single circle, making it a valid possibility."
  },
  {
    "id": 16,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Red are Blue",
      "All Blue are Green",
      "No Green is Yellow"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Red", "Blue", "Green", "Yellow"],
      "relations": [
        { "left": "Red", "right": "Blue", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Blue", "right": "Green", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Green", "right": "Yellow", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "No Red is Yellow",
      "Some Yellow being Blue is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 0,
    "explanation": "Only I follows. Since Red is completely inside Green, and No Green is Yellow, Red can never touch Yellow (Conclusion I is true). Because Blue is also inside Green, Yellow can never touch Blue either, making Conclusion II impossible."
  },
  {
    "id": 17,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Keys are Locks",
      "All Locks are Doors",
      "Some Doors are Windows"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Keys", "Locks", "Doors", "Windows"],
      "relations": [
        { "left": "Keys", "right": "Locks", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Locks", "right": "Doors", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Doors", "right": "Windows", "type": "some", "mode": "overlap", "priority": 70 }
      ]
    },
    "conclusions": [
      "Some Keys are Windows",
      "All Windows being Keys is a possibility"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 1,
    "explanation": "Only II follows. Keys and Windows have no direct connection, so Conclusion I is not definitely true. However, since there is no negative restriction between Windows and Keys, the Windows circle can expand to contain all Keys, making Conclusion II a valid possibility."
  },
  {
    "id": 18,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Apparels are Shirts",
      "All Pants are Shirts",
      "All Shirts are Clothes"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Apparels", "Pants", "Shirts", "Clothes"],
      "relations": [
        { "left": "Apparels", "right": "Shirts", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Pants", "right": "Shirts", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Shirts", "right": "Clothes", "type": "subset", "mode": "inside", "priority": 100 }
      ]
    },
    "conclusions": [
      "Some Apparels are Pants",
      "All Apparels are Clothes"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 1,
    "explanation": "Only II follows. Apparels and Pants are both inside Shirts, but they may or may not touch each other, so Conclusion I does not definitely follow. Since all Shirts are Clothes, Apparels (which are inside Shirts) are automatically inside Clothes, making Conclusion II definitely true."
  },
  {
    "id": 19,
    "subject": "Reasoning",
    "chapter": "Syllogism",
    "difficulty": "Difficult",
    "statements": [
      "All Lions are Tigers",
      "All Tigers are Leopards",
      "No Leopard is a Cheetah"
    ],
    "diagram": {
      "type": "mixed",
      "labels": ["Lions", "Tigers", "Leopards", "Cheetahs"],
      "relations": [
        { "left": "Lions", "right": "Tigers", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Tigers", "right": "Leopards", "type": "subset", "mode": "inside", "priority": 100 },
        { "left": "Leopards", "right": "Cheetahs", "type": "no", "mode": "disjoint", "priority": 90 }
      ]
    },
    "conclusions": [
      "No Tiger is a Cheetah",
      "Some Leopards are Lions"
    ],
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    "answer": 2,
    "explanation": "Both conclusions follow. Since Tigers are entirely inside Leopards, and No Leopard is a Cheetah, Tigers can never touch Cheetahs either (Conclusion I is true). Also, because Lions are completely inside Leopards, the shared space guarantees that Some Leopards are definitely Lions (Conclusion II is true)."
  }
];
