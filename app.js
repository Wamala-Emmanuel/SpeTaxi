const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const homeRoute = require("./routes/home.route")
const port = process.env.PORT || 4000

mongoose.connect("mongodb+srv://wamala:wamala@cluster0.y4ayp.mongodb.net/wamala?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to the database.')
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', " Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    next();
})

app.use("/contacts", homeRoute)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

