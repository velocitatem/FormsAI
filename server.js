const { OpenAILLM, SuppresServer, DataGenerator } = require('ai.suppress.js');
const { HuggingFaceLLM } = require('mix.suppress.js');
const server = new SuppresServer();
const config = require("./config.json");
const llm = new OpenAILLM(config.key);
// import request
const request = require('request');

const prompt = "{title}\n{about}\nYou are answering a question for the survey described above. Answer the following question as best you can. Write only a short max 10 word sentence.\n{question}";
const format = JSON.stringify({
    "answer": "string"
});
const dataGenerator = new DataGenerator(prompt, format, llm);

server.createEndpoint(
    "/answer/question/:title/:about/:question",
    "GET",
    dataGenerator);

let model = new HuggingFaceLLM({
    task: "zero-shot-classification"
});

server.app.get("/mc/answer/question/:title/:about/:question/:choices", (req, res)=>{
    let choices = req.params.choices.split(",");
    let query = `${req.params.title} ${req.params.about} ${req.params.question}`;
    model.generate({query:query, candidate_labels: choices}).then((result)=>{
        res.send(result);
    });
});

//  let url = "http://localhost:3000/formdress?url="+form
server.app.get("/formdress", async (req, res)=>{
    // there is a formdress cli in this directory
    // ./backend/google-forms-html-exporter/cmd/formdress/formdress -f [form url]
    // this will output a json


    let form = req.query.url;
    // run the formdress cli
    let cmd = `/backend/google-forms-html-exporter/cmd/formdress/formdress -f ${form}`;
    // dirname + cmd
    cmd = __dirname + cmd;
    console.log(cmd);
    // add current directory to path
    // improt exec
    const { exec } = require('child_process');

    console.log("running formdress");
    let formdress = await exec(cmd);
    // wait for formdress to finish and then send the json
    // handle error
    // accumulate data
    let data = "";
    formdress.stderr.on('data', (data) => {

    });


})

server.app.get("/was/ai/:text", (req, res)=>{
    let text = req.params.text;
    request.post({
        url: "https://api.gptzero.me/v2/predict/text",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "document": text
        })
    }, (err, response, body)=>{
        if(err){
            res.send(err);
        }else{
            // parse the response body
            let data = JSON.parse(body);
            let score = data.documents[0].completely_generated_prob
            res.send(`${score}`);
        }
    });

});

server.start(3000);
