const express = require('express')
const router = express.Router()
const LocalerCtrl = require('../controller/locales') 
const WeatherCtrl = require('../controller/weather') 

router.get('/weathers/:idCity', WeatherCtrl.get);
router.get('/locales', LocalerCtrl.list);

module.exports = router