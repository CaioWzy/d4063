const { db } = require('../database/MongoClient')


const collection = db.collection("agents");

const findAll = async (domain) => collection.find({ domain }).toArray();

module.exports = {
    findAll
}