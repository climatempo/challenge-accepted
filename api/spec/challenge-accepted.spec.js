const request = require('request');
const url = "http://localhost:3001/";
const locales = "locales";
const weather = "weather/";
const city = "Osasco";

/**
 * Testes unitários das chamadas da API
 */

describe("Challange-Accepted Climatempo Tests", function () {
	describe("/locales", function () {
		it("Teste da requisição da busca por localidades", function (done) {
			request.get(url + locales, function (error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Teste do objeto de retorno da busca por localidades", function (done) {
			request.get(url + locales, function (error, response, body) {
				const newBody = JSON.parse(body);
				expect(newBody.locales).toEqual(jasmine.any(Object));
				done();
			});
		});
		it("Teste da requisição da busca da previsão do tempo por nome da localidade", function (done) {
			request.get(url + weather + city, function (error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Teste do objeto de retorno da busca da previsão do tempo por nome da localidade", function (done) {
			request.get(url + weather + city, function (error, response, body) {
				const newBody = JSON.parse(body);
				expect(newBody.weather).toEqual(jasmine.any(Object));
				done();
			});
		});
	});
});