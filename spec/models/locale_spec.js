var Locale = require('../../app/models/locale.js');

describe("com o método procurarLocale", function() {
	it("deve trazer todas as cidades", function(done) {

		var locale = new Locale("Osasco");

		locale.procurarLocale(function(retorno){
			expect(retorno.erro).toBe(false);
			done();
		});
	});
});