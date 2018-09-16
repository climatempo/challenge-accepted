let express      = require('express'),
	logger       = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser'),
	load         = require('express-load'),
	session      = require('express-session'),
	moment       = require('moment'),
	cors = require('cors')

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'challenge-accepted' }));

// helpers
app.use(function(req, res, next) {
	res.locals.moment = moment;
	next();
});

load('controllers').then('routes').into(app);

const port = '3001'

app.listen(port, function() {
	console.log('Aplicação rodando na porta ' + port);
});
