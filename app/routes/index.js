var express = require('express');
var router = express.Router();
var homeController = require('../controller/homeController.js');

/* GET home page. */
router.get('/', homeController.index);
router.post('/localePesquisar', homeController.localePesquisar);
router.post('/weatherPesquisar', homeController.weatherPesquisar);

module.exports = router;
