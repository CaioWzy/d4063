const { MongoClient } = require("mongodb");


const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}?retryWrites=true&writeConcern=majority`;

const client = new MongoClient(uri);

const checkConnection = async () => {
    try {
        connection = await client.connect();
    } catch (error) {
        console.log(error);
        await client.close();
        process.exit(1);
    }
}

const getDatabase = () => client.db(process.env.MONGO_DATABASE);

module.exports = {
    checkConnection,
    db: getDatabase()
}