const express = require('express');

const { checkConnection } = require('./src/database/MongoClient');
const v1Router = require('./src/Router');
const { globalErrorHandler } = require('./src/Middlewares')


const app = express();
const router = express.Router();

router.use('/v1', [],  v1Router);

app.use([
    router,
    globalErrorHandler
]);

async function main() {
    await checkConnection();
    app.listen(8080, () => console.log("Ok"));
}

main();
