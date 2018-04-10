var express      = require('express'),
	path         = require('path'),
	favicon      = require('static-favicon'),
	logger       = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser'),
	load 		 = require('express-load'),
	session      = require('express-session'),
	flash 		 = require('express-flash'),
	moment 		 = require('moment');

var app = express();

//middleware
var erros = require('./middlewares/erros');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'challenge-accepted' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// helpers
app.use(function(req, res, next) {
	res.locals.moment = moment;
	next();
});

load('controllers').then('routes').into(app);

//middlewares
app.use(erros.notfound);
app.use(erros.serverError);

const port = '3000'

app.listen(port, function() {
    console.log('Aplicação rodando na porta ' + port);
});
