const express = require('express');

const healthyRouter = require('./healthy/HealthyRouter');


const router = express.Router({ mergeParams: true });

router.use(healthyRouter);

module.exports = router;