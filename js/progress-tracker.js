/* ======================
UNIVERSAL PROGRESS TRACKER
====================== */

/* ======================
UNIVERSAL PROGRESS TRACKER
====================== */

(function(){

  function saveProgress(percent){

    const page =
      location.pathname.split("/").pop();

    let data =
      JSON.parse(
        localStorage.getItem("tabProgress")
      ) || {};

    if(!data[page]) data[page] = {};

    const old =
      data[page].scroll || 0;

    if(percent > old){

      data[page].scroll = percent;

      localStorage.setItem(
        "tabProgress",
        JSON.stringify(data)
      );
    }

  }

  function updateProgress(){

    const scrollTop =
      window.scrollY;

    const windowHeight =
      window.innerHeight;

    const docHeight =
      document.body.scrollHeight;

    const total =
      docHeight - windowHeight;

    if(total <= 0) return;

    const percent =
      Math.min(
        100,
        Math.round(
          (scrollTop / total) * 100
        )
      );

    saveProgress(percent);

  }

  window.addEventListener(
    "scroll",
    updateProgress
  );

})();