const mongoDb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

//Create a new contact
async function CreateContact(req, res, next) {
  
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const collection = await mongoDb.GetDatabase().db('People_I_Know').collection('contacts');
    
  collection
      .insertOne(contact)
      .then(response => {
          res.status(201).json(response);
      })
      .catch((error) => {
        res.status(500).json(error.error || "An error occured while creating contact.");
      });
}

//TODO: update contact, delete contact
async function UpdateContact() {

}

async function DeleteContact() {
  
}

//Get all the contacts
async function GetAll(req, res, next) {
  const result = await mongoDb.GetDatabase().db('People_I_Know').collection('contacts').find();

  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}

//Get a single contact using url parameter
//hex string added
async function GetSingle(req, res, next) {
  const userId = new ObjectId(req.params.id);
  const result = await mongoDb
    .GetDatabase()
    .db('People_I_Know')
    .collection('contacts')
    .find({ _id: userId });

  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
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
