var express = require('express');

const controller = require('../../server/controllers/admin/countries/index')

var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.json({
//     country: 'OK'
//   });
// });

router.get('/', controller.getAll);

// router.get('/:id', controller.getOne);
//router.post('/', controller.create);

// router.delete('/', controller.delete);

// router.put('/', controller.update);

module.exports = router;



