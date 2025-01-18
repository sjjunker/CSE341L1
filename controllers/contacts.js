const mongoDb = require("../db/connection");
const ObjectId = require('mongodb').ObjectId;

//Get all the contacts
async function GetAll(req, res, next) {
    const result = await mongoDb.GetDatabase().db("People_I_Know").collection('contacts').find();
    
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
}

//Get a single contact using url parameter
//hex string added
async function GetSingle(req, res, next) {
    const userId = new ObjectId(req.params.id);
    const result = await mongoDb.GetDatabase().db("People_I_Know").collection('contacts').find({ _id: userId });
    
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
  });
}

module.exports = {
    GetAll,
    GetSingle
};