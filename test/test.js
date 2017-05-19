const locale  = require("../routes/locale.js"),
      weather = require("../routes/weather.js"),
      http    = require("http"),
	  assert  = require('assert');

describe("challenge-accepted", function() {
	describe("request", function() {
		it('Teste Rota de locale', function() {
			http.get({
			  hostname: 'localhost',
			  port: 8000,
			  path: '/locale',
			  agent: false  
			}, (err,res) => {
			  	if(err)
			  		console.log(err);
			  	else
			  		console.log(res);
			});
		});
	});
});