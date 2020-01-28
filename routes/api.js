var express = require('express');
var router = express.Router();
const locale = require('../controllers/locale');
const weather = require('../controllers/weather');

/* GET weather based on location */
router.get('/locale', (req, res, next) => {
  locale(req, res, next);
});

router.get('/weather/:locale', (req, res, next) => {
  weather(req, res, next);
});

module.exports = router;
