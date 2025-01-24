const mongoDb = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

//Create a new contact
async function CreateContact(req, res) {
    //Get contact attributes from the req
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    //Get the collection from the database
    const collection = await mongoDb.GetDatabase().db("People_I_Know").collection("contacts");

    //Add the contact to the collection and return a response
    collection.insertOne(contact).then((response) => {
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || "Error occurred while creating contact");
        }
    });
}

//Update contact
async function UpdateContact(req, res) {
    //Get the contact id from the url
    const contactId = new ObjectId(req.params.id);

    //Get the contact attributes from the req
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    //Update the contact using the contact id and return a response
    await mongoDb
        .GetDatabase()
        .db("People_I_Know")
        .collection("contacts")
        .updateOne({ _id: contactId }, { $set: contact })
        .then((response) => {
            if (response.modifiedCount > 0) {
                res.status(204).send();
            } else {
                console.log(response);
                res.status(500).json(response.error);
            }
        })
        .catch(error => {
          console.log(error);
        });
}

async function DeleteContact(req, res) {
  try {
    //Get the contact id from the url
    const contactId = new ObjectId(req.params.id);

    //Delete the contact using the contact id and return a response
    const response = await mongoDb
        .GetDatabase()
        .db("People_I_Know")
        .collection("contacts")
        .deleteOne({ _id: contactId });

        if (response.deletedCount > 0) {
            res.status(200).send("Contact deleted");
        } else {
            res.status(404).json("Contact not found");
        }
  }  catch (error) {
    console.log(error);
    res.status(500).json({error: "Error occurred while deleting contact"})
  }
}

//Get all the contacts
async function GetAll(req, res) {
    const result = await mongoDb.GetDatabase().db("People_I_Know").collection("contacts").find();

    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists);
    });
}

//Get a single contact using url parameter
//hex string added
async function GetSingle(req, res) {
    const userId = new ObjectId(req.params.id);
    const result = await mongoDb
        .GetDatabase()
        .db("People_I_Know")
        .collection("contacts")
        .find({ _id: userId });

    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
    });
}

module.exports = {
    GetAll,
    GetSingle,
    CreateContact,
    UpdateContact,
    DeleteContact
};
