const { db } = require('../database/MongoClient')


const collection = db.collection("agents");

const listAll = async () => {
    return await collection.find().toArray();
}

module.exports = {
    listAll
}