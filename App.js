const express = require('express');

const v1Router = require('./src/Router')


const app = express();
const router = express.Router();

router.use('/v1', [],  v1Router);

app.use(router);

app.listen(8080, () => console.log("Ok"))