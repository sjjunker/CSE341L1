//Express module
let express = require("express");
let app = express();

//Route
app.get("/", function (req, res) {
    res.send("<html><body><h1>Trayton John Gough</h1></body></html>")
})

//Server
app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
})