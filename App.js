require('dotenv').config();
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
    const PORT = process.env.HTTP_PORT || 8080;
    app.listen(PORT, () => console.log(`API is now available at http://localhost:${PORT}`));
}

main();
