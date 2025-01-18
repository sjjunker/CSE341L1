const MongoClient = require("mongodb").MongoClient;
const env = require("dotenv").config();
const uri = process.env.MONGODB;

let database;

//Initialize the database
async function InitializeDatabase() {
    if(database) {
        console.log("Database already initialized.");
        return;
    }

    const client = new MongoClient(uri);
    
    try {
        database = await client.connect();
    } catch(err) {
        console.log(err);
    }
}

//Get the database
function GetDatabase() {
    if (!database) {
        throw Error("Database not initialized!");
    }

    return database;
}

//Export the functions
module.exports = {
    InitializeDatabase,
    GetDatabase
};