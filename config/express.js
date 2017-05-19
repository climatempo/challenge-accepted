var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {	
	var app = express();
	app.use(express.static('./public'));
	
	// Engine de View and default folder for views
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// Body Parser made de struct of body content
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app);

	return app;	
}
