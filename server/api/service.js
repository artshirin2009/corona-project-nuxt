var express = require('express');
const controller = require('../controllers/service')
let router = express.Router();

router.get('/cookies', controller.cookies);

module.exports = router;



