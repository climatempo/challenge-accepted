var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname));
app.use(morgan('dev'));

require('./app/routes.js')(app);

app.listen(port);
console.log("Climatetempo Server | porta " + port);