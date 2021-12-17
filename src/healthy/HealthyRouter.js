const express = require('express');

const controller = require('./HealthyController');


const router = express.Router({ mergeParams: true });

router.get('/healthy', controller.index);

module.exports = router;
