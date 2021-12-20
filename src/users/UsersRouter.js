const express = require('express');

const controller = require('./UsersController');


const router = express.Router({ mergeParams: true });

router.post('/auth', controller.authenticate);

module.exports = router;
