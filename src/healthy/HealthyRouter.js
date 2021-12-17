const express = require('express');

const healthyController = require('./HealthyController');


const router = express.Router({ mergeParams: true });

router.get('/healthy', healthyController.index);

module.exports = router;
