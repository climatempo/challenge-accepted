var Weather = require('../../app/models/weather.js');

describe("com o método procurarPrevisao", function() {
	it("deve trazer todas as previsoes da cidade de Osasco", function(done) {

		var weather = new Weather(3735);

		weather.procurarPrevisao(function(retorno){
			expect(retorno.erro).toBe(false);
			done();
		});
	});
});