export function renderQuestion(question){

    const questionText =
    document.getElementById("questionText");

    const options =
    document.getElementById("options");

    let html="";

    html+="<h3>Statements</h3>";

    question.statements.forEach(

        (s,i)=>{

            html+=`<p>${i+1}. ${s}</p>`;

        }

    );

    html+="<br>";

    html+="<h3>Conclusions</h3>";

    const roman=[
        "I",
        "II",
        "III",
        "IV"
    ];

    question.conclusions.forEach(

        (c,i)=>{

            html+=`<p>${roman[i]}. ${c}</p>`;

        }

    );

    questionText.innerHTML=html;

    let optionHTML="";

    question.options.forEach(

        (o,i)=>{

            optionHTML+=`

<label>

<input
type="radio"
name="option"
value="${i}">

${o}

</label>

`;

        }

    );

    options.innerHTML=optionHTML;

}