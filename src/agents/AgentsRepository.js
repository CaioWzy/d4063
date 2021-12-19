const { db } = require('../database/MongoClient')


const collection = db.collection("agents");

const findAll = async (domain) => collection.find({ domain }).toArray();

const save = async (agent) => collection.insertOne(agent);

module.exports = {
    findAll,
    save
}