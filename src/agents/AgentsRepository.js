const { ObjectId } = require('mongodb');

const { db } = require('../database/MongoClient');
const AgentDto = require('../dtos/AgentDto');


const collection = db.collection("agents");

const findAll = async (domain) => collection.find({ domain }).toArray();

const save = async (agent) => collection.insertOne(agent);

const findOne = async (domain, id) => {
    const _id = ObjectId(id);

    const agent = await collection.findOne({ _id, domain });

    return new AgentDto(agent);
}

const update = async (domain, id, agent) => {
    const _id = ObjectId(id);

    const { name, login, medias, email, chat } = agent;

    const data = await collection.updateOne({ _id, domain }, {
        $set: {
            name,
            login,
            medias,
            email,
            chat
        }
    });

    if (data.matchedCount) return findOne(domain, id);

    return null;
}

const destroy = async (domain, id) => {
    const _id = ObjectId(id);

    collection.deleteOne({ _id, domain });
}

module.exports = {
    findAll,
    save,
    findOne,
    update,
    destroy
}