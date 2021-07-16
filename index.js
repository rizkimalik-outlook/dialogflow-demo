const express = require('express')
const {WebhookClient} = require('dialogflow-fulfillment')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    console.log('Server Is Working');
    res.send("Server Is Working......")
})

app.post('/webhook', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})
    // create intentMap for handle intent
    let intentMap = new Map();
    // add intent map 2nd parameter pass function
    intentMap.set('webhook-demo',handleWebHookIntent)
    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})
function handleWebHookIntent(agent){
    agent.add("Hello I am Webhook demo How are you...")
}


app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})