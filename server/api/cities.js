var express = require('express');

const controller = require('../controllers/admin/cities/index')

var router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getOne);

// router.delete('/', controller.delete);

// router.put('/', controller.update);

module.exports = router;



