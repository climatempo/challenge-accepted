var http = require('http');

describe('WeatherTest', function(){

	it('search-json', function(done){

		var configuracoes = {
			hostname: 'localhost',
			port: 3000,
			path: '/search?locale=são+paulo',
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		};

		http.get(configuracoes, function(res){

			if(res.statusCode == 200){
				console.log('Retornou ok');
			}
			if(res.headers['content-type'] == 'application/json; charset=utf-8'){
				console.log('Content-type ok');
			}
			if(res.statusCode != 200){
				console.log(res);
			}
			done();
		});
	});

});