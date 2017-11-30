var express = require('express');
var router = express.Router();
var controller = require('../controllers/main')

router.route('/')
.get(controller.get)
.post(controller.post)

module.exports = router;