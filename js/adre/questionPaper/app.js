const paperList = document.getElementById("paperList");
const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("yearFilter");
const noData = document.getElementById("noData");

let papers = [...PAPERS];
let filteredPapers = [...PAPERS];

init();

function init() {
    loadYears();
    renderPapers(filteredPapers);

    searchInput.addEventListener("input", filterPapers);
    yearFilter.addEventListener("change", filterPapers);
}

function loadYears() {

    const years = [...new Set(papers.map(item => item.year))]
        .sort((a, b) => b - a);

    years.forEach(year => {

        const option = document.createElement("option");

        option.value = year;
        option.textContent = year;

        yearFilter.appendChild(option);

    });

}

function filterPapers() {

    const keyword = searchInput.value.trim().toLowerCase();
    const selectedYear = yearFilter.value;

    filteredPapers = papers.filter(item => {

        const searchMatch =
            item.title.toLowerCase().includes(keyword) ||
            item.exam.toLowerCase().includes(keyword) ||
            item.subject.toLowerCase().includes(keyword) ||
            item.language.toLowerCase().includes(keyword);

        const yearMatch =
            selectedYear === "" ||
            item.year == selectedYear;

        return searchMatch && yearMatch;

    });

    renderPapers(filteredPapers);

}

function renderPapers(list) {

    paperList.innerHTML = "";

    if (!list.length) {

        noData.classList.remove("d-none");

        return;

    }

    noData.classList.add("d-none");

    list.forEach(paper => {

        const card = document.createElement("div");

        card.className = "col-lg-4 col-md-6 paper-card";

        card.innerHTML = `
            <div class="card h-100">

                <div class="card-body">

                    <span class="badge-year">
                        ${paper.year}
                    </span>

                    <div class="paper-title">
                        ${paper.title}
                    </div>

                    <div class="paper-info">
                        <strong>Exam:</strong>
                        ${paper.exam}
                    </div>

                    <div class="paper-info">
                        <strong>Subject:</strong>
                        ${paper.subject}
                    </div>

                    <div class="paper-info mb-3">
                        <strong>Language:</strong>
                        ${paper.language}
                    </div>
                    <div class="button-group">

                        <a
                            href="${paper.file}"
                            target="_blank"
                            class="view-btn">
                            👁 View
                        </a>

                        <a
                            href="${paper.file}"
                            download
                            class="download-btn">
                            ⬇ Download
                        </a>

                    </div>

                </div>

            </div>
        `;

        paperList.appendChild(card);

    });

}