var express = require('express')
    ,app = express()
    //,bodyParser = require('body-parser')
    ,controller_tempo = require('../controllers/tempo')
    ;

 app.use(express.static('./public'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
controller_tempo(app);

module.exports = app;



