var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.render('weather', { city: city,  weathers: [ {locale: {name: 'flkjsdf'}} ] });
});

module.exports = router;
