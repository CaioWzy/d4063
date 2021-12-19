const { checkConnection } = require('./src/database/MongoClient')

const express = require('express');

const v1Router = require('./src/Router');


const app = express();
const router = express.Router();

router.use('/v1', [],  v1Router);

app.use(router);

async function main() {
    await checkConnection();
    app.listen(8080, () => console.log("Ok"));
}

main();
