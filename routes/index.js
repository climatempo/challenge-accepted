var express = require('express');
var router = express.Router();

var locale = require('../public/json/locales.json')
var weather = require('../public/json/weather.json')
/* GET home page. */
router.get('/', function(req, res) {

  var weathers;
  var region;
  let id;
  
  var search = req.query;
  
  for (let i = 0; i < locale.length; i++) {
    
    if(locale[i].name.toString().toUpperCase() === search.search.toString().toUpperCase()){

      region = locale[i].name+'-'+locale[i].state.toString();
      id = locale[i].id;

      for (let j = 0; j < weather.length; j++) {
        
        if(weather[j].locale.name.toString().toUpperCase() === search.search.toString().toUpperCase()) {
            
            res.render('index', { title: 'Teste ClimaTempo',name:region, weathers:weather[j].weather });
        }
      }
    }
  }

  
  
});

module.exports = router;
