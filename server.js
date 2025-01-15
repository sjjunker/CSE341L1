//Express module
let express = require("express");
let app = express();
const env = require("dotenv").config();

//Use the router for home page
app.use("/", require("./routes"));

//Server
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});