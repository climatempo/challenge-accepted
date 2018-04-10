let request = require('request');
	weather = require('../modules/weather.js'),
	locale = require('../modules/locale.js'),
	url = "http://localhost:3000/",
	urlWeather = "http://localhost:3000/weather";


describe("Challange-Accepted Climatempo Tests", function() {
	describe("GET /", function () {
		it("returns status code 200", function(done) {
			request.get(url, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
	describe("POST /", function () {
		it("returns status 302", function (done) {
			request.post(urlWeather, function(error, response, body) {
				expect(response.statusCode).toBe(302);
				done();
			});
		});
	});
	describe("Testando retorno dos módulos de locale e weather", function () {
		it("locale recebe null e deve retornar null", function (done) {
			expect(locale(null)).toBeNull();
			done();
		});
		it("locale recebe Osasco e deve retornar Osasco", function (done) {
			expect(locale('Osasco')).toBe('Osasco');
			done();
		});
		it("locale recebe São Paulo e deve retornar São Paulo", function (done) {
			expect(locale('São Paulo')).toBe('São Paulo');
			done();
		});
		it("locale recebe Outra cidade e deve retornar null", function (done) {
			expect(locale(any)).toBeNull();
			done();
		});
		it("weather recebe Osasco e deve retornar um objeto", function (done) {
			expect(weather('Osasco')).toEqual(jasmine.any(Object));
			done();
		});
		it("weather recebe São Paulo e deve retornar um objeto", function (done) {
			expect(weather('São Paulo')).toEqual(jasmine.any(Object));
			done();
		});
		it("weather recebe Outra cidade e deve retornar null", function (done) {
			expect(weather(any)).toBeNull();
			done();
		});
	});
});