const express = require('express');

const middlewares = require('./Middlewares')
const healthyRouter = require('./healthy/HealthyRouter');
const agentsRouter = require('./agents/AgentsRouter');


const router = express.Router({ mergeParams: true });
const publicRouter = express.Router({ mergeParams: true });

router.use(healthyRouter);
router.use('/public', [
    middlewares.getDomainHandler,
    express.json()
], publicRouter);

publicRouter.use('/agents', agentsRouter);

module.exports = router;