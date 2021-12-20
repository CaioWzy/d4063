const { ObjectId } = require('mongodb');

const { db } = require('../database/MongoClient');


const collection = db.collection("users");

const findOne = async (clientId, clientSecret) => collection.findOne({ clientId, clientSecret });

module.exports = {
    findOne
}