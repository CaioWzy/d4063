const express = require('express');

const controller = require('./AgentsController');


const router = express.Router({ mergeParams: true });

router.delete('/', controller.destroyByLogin);

router.get('/', controller.index);

router.post('/', controller.create);

router.get('/:id', controller.get);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
