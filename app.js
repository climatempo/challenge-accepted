'use strict'

var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var osascoRouter = require('./routes/osasco');
var spRouter = require('./routes/sp');
var app = express();

app.set('views', path.join(__dirname, 'views'));;
app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log('Running on 3000 port');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/stylesheets')));

app.use('/', indexRouter);
app.use('/osasco', osascoRouter);
app.use('/sp', spRouter);

module.exports = app;
