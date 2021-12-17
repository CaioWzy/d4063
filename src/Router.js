const express = require('express');

const healthyRouter = require('./healthy/HealthyRouter');
const agentsRouter = require('./agents/AgentsRouter')


const router = express.Router({ mergeParams: true });

router.use(healthyRouter);
router.use('/agents', agentsRouter);

module.exports = router;