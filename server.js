//Express module
const express = require("express");
const mongoDb = require("./db/connection");
const bodyParser = require("body-parser");
const env = require("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;

//Use the router for home page
app.use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    })
    .use("/", require("./routes"));

//Start db
const promise = mongoDb.InitializeDatabase();

//Listen on server
promise
    .then(() => {
        app.listen(port, () => {
            console.log(`Database connected and running on port:${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

