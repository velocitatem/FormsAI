let form = document.URL.toString();
let url = "https://lobster-app-wkszu.ondigitalocean.app/formdress?url="+form
console.log(url)
let urlObj = new URL(form);

async function getResponseText(title, about, question) {
    // GET "/answer/question/:title/:about/:question",
    // url encode all params
    title = encodeURIComponent(title);
    about = encodeURIComponent(about);
    question = encodeURIComponent(question);
    return await fetch("https://bf0b-83-55-123-104.eu.ngrok.io"+"/answer/question/"+title+"/"+about+"/"+question)
        .then(response => response.json())
        .then(text => {
            console.log(text);
            return text.response.answer;
        });
}
async function getResponseMC(title,about,question, choices){
    // get  https://bf0b-83-55-123-104.eu.ngrok.io/mc/answer/question/:title/:about/:question/:choices
    title = encodeURIComponent(title);
    about = encodeURIComponent(about);
    question = encodeURIComponent(question);
    choices = encodeURIComponent(choices);
    return await fetch("https://bf0b-83-55-123-104.eu.ngrok.io"+"/mc/answer/question/"+title+"/"+about+"/"+question+"/"+choices)
        .then(response => response.json())
        .then(text => {
            return text.response;
        });
}
function processForm() {
    alert(url)
    fetch(url).then(res => res.json()).then(async (data) => {
        let title = data.header;
        let about = data.desc;
        let questions = data.fields;
        // go synchronously over each question
        for (let i = 0; i < questions.length; i++) {
            let question = questions[i];
            let response;
            let hasWidget = question.widgets;
            if(hasWidget) {
                if (question.widgets[0].options) {
                    // MC question
                    let choices = question.widgets[0].options.map((option) => option.label);
                    // remove any empty strings from the choices
                    choices = choices.filter((choice) => choice !== "");
                    choices = choices.join(",");
                    response = await getResponseMC(title, about, question.label, choices);
                    // get the label with the highest score
                    let maxScore = 0;
                    let maxScoreIndex = 0;
                    for (let j = 0; j < response.scores.length; j++) {
                        if (response.scores[j] > maxScore) {
                            maxScore = response.scores[j];
                            maxScoreIndex = j;
                        }
                    }
                    response = response.labels[maxScoreIndex];
                    let lab = "entry."+question.widgets[0].id
                    urlObj.searchParams.append(lab, response)
                } else {
                    let inQ = question.label+"\n"+question.desc
                    response = await getResponseText(title, about, inQ);
                    let lab = "entry."+question.widgets[0].id
                    urlObj.searchParams.append(lab, response)
                }
            }
            console.log(question);
        }
        console.log(urlObj.toString());
        // open the url in a new tab
        window.open(urlObj.toString(), '_blank');
    })
}


// ask user if they want to fill the form
let fill = confirm("Do you want to fill the form?");
if (fill) {
    processForm();
}
