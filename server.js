const { OpenAILLM, SuppresServer, DataGenerator } = require('ai.suppress.js');
const { HuggingFaceLLM } = require('mix.suppress.js');
const server = new SuppresServer();
const config = require("./config.json");
const llm = new OpenAILLM(config.key);

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

server.start(3000);
