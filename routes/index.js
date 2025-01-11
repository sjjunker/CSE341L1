//Get express router
let express = require("express");
let router = express.Router();

//Get controller
let controller = require("../controllers");

//Get res for home page
router.get("/", controller.getName);

//Export the router
module.exports = router;