const express = require('express');

const middlewares = require('./Middlewares');
const healthyRouter = require('./healthy/HealthyRouter');
const agentsRouter = require('./agents/AgentsRouter');
const usersRouter = require('./users/UsersRouter');


const router = express.Router({ mergeParams: true });
const publicRouter = express.Router({ mergeParams: true });

router.use(healthyRouter);
router.use('/public', [express.json()], publicRouter);

publicRouter.use('/agents', [middlewares.authenticationHandler], agentsRouter);
publicRouter.use('/users', usersRouter);

module.exports = router;