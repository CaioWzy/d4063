const express = require('express');


const router = express.Router({ mergeParams: true });

router.get('/healthy', (req, res) => res.sendStatus(200))

module.exports = router