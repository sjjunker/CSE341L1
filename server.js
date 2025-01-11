//Express module
let express = require("express");
let app = express();

//Use the router for home page
app.use("/", require("./routes"));

//Server
app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
})