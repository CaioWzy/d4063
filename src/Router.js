const express = require('express');


const router = express.Router({ mergeParams: true });

const healthyController = require('./healthy/HealthyController')

router.get('/healthy', healthyController.index);

module.exports = router;