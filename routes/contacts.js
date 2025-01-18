//Get express router
let express = require("express");
let router = express.Router();

//Get controller
let controller = require("../controllers/contacts");

//Get res for each controller option
router.get("/", controller.GetAll);
router.get("/:id", controller.GetSingle);

//Export the router
module.exports = router;