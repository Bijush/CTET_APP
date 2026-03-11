/* ======================
   BOOKMARK ENGINE
====================== */

const registry = {
  MCQ: [],
  MOCK: [],
  CONCEPT: [],
  THEORY: [],
  GK: []
};

/* ======================
   REGISTER DATA
====================== */
export function registerData(type, data){

  if(!registry[type]){
    registry[type] = [];
  }

  registry[type].push(...data);

}

/* ======================
   FIND QUESTION
====================== */
export function findItem(type, id){

  const pool = registry[type] || [];

  return pool.find(x => x.id === id);

}

/* ======================
   GET SUBJECT LIST
====================== */
export function getSubjects(){

  const subjects = new Set();

  Object.values(registry).forEach(arr => {

    arr.forEach(q => {

      if(q.subject){
        subjects.add(q.subject);
      }

    });

  });

  return [...subjects];

}

/* ======================
   GET BOOKMARKS
====================== */

export function getBookmarks() {

  let b =
  JSON.parse(localStorage.getItem("bookmarks")) || [];

  b = b.map(x => {

    if (typeof x === "string") {
      return {
        type: "MCQ",
        id: x,
        subject: "General",
        date: Date.now()
      };
    }

    if (!x.date) x.date = Date.now();
    if (!x.subject) x.subject = "General";

    return x;

  });

  return b;
}

/* ======================
   SAVE BOOKMARKS
====================== */

export function saveBookmarks(b){
  localStorage.setItem("bookmarks", JSON.stringify(b));
}

/* ======================
   TOGGLE BOOKMARK
====================== */

export function toggleBookmark(q){

  if(!q) return false;

  let b = getBookmarks();

  const pos =
  b.findIndex(x => x.id === q.id);

  if(pos > -1){

    b.splice(pos,1);
    saveBookmarks(b);

    return false;

  }else{

    if(!b.some(x => x.id === q.id)){

      b.push({
        type:q.type || "MCQ",
        id:q.id,
        subject:q.subject || "General",
        date:Date.now()
      });

    }

    saveBookmarks(b);

    return true;

  }

}

/* ======================
   CHECK BOOKMARK
====================== */

export function isBookmarked(id){

  const bookmarks = getBookmarks();

  return bookmarks.some(b => b.id === id);

}

/* ======================
   BOOKMARK ICON
====================== */

export function bookmarkSVG(){
  return `
  <svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z"/>
  </svg>`;
}
/* ======================
   SUBJECT WISE COUNT
====================== */

export function bookmarkSubjectCount(){

  const bookmarks = getBookmarks();

  const map = {};

  bookmarks.forEach(b => {

    const sub = b.subject || "General";

    if(!map[sub]){
      map[sub] = 0;
    }

    map[sub]++;

  });

  return map;

}