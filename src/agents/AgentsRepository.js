const { ObjectId } = require('mongodb');

const { db } = require('../database/MongoClient');

const collection = db.collection("agents");

const findAll = async (domain) => {
    const agentList = await collection.find({ domain }).toArray();

    return agentList ? agentList : [];
};

const save = async (agent) => collection.insertOne(agent);

const findOne = async (domain, id) => {
    const _id = ObjectId(id);

    return collection.findOne({ _id, domain });
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

const destroy = async (domain, id, login) => {
    const _id = ObjectId(id);

    await collection.deleteOne({
        $or:[{ _id }, { login }], 
        domain
    });
}

module.exports = {
    findAll,
    save,
    findOne,
    update,
    destroy
}