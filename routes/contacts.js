//Get express router
let express = require("express");
let router = express.Router();

//Get controller
let controller = require("../controllers/contacts");

//Get res for each controller option
router.get("/", controller.GetAll);
router.get("/:id", controller.GetSingle);

//POST, PUT, DELETE methods
router.post("/", controller.CreateContact);
router.put("/:id", controller.UpdateContact);
router.delete("/:id", controller.DeleteContact);

//Export the router
module.exports = router;
