var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const routes = require('./src/routes/index');


var app = express();


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));


app.use('/', routes);


app.listen(process.env.PORT || 3000, function() {
    console.log('App rodando em localhost:3000');
});
