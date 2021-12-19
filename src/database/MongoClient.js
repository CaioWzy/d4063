const { MongoClient } = require("mongodb");


const uri = "mongodb://root:123@localhost?retryWrites=true&writeConcern=majority";

const client = new MongoClient(uri);

const checkConnection = async () => {
    try {
        connection = await client.connect();
    } catch (e) {
        console.log(e)
        await client.close();
        process.exit(1);
    }
}

const getDatabase = () => client.db("d4063");

module.exports = {
    checkConnection,
    db: getDatabase()
}