const { ObjectId } = require('mongodb');

const { db } = require('../database/MongoClient');
const AgentDto = require('../dtos/AgentDto');


const collection = db.collection("agents");

const findAll = async (domain) => collection.find({ domain }).toArray();

const save = async (agent) => collection.insertOne(agent);

const findOne = async (domain, id) => {
    const _id = ObjectId(id);

    const agent = await collection.findOne({ domain, _id });

    return new AgentDto(agent);
}

module.exports = {
    findAll,
    save,
    findOne
}