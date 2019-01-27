const assert = require('assert');
const axios = require('axios');

const baseUrl = 'localhost:5000/weather-forecasts/'
const { getWeather } = require('../routes/weather.js');

describe('Climatempo Tests', () => {
	describe("GET /weather-forecasts", () => {
	    it("returns status code 200", async () => {
			await axios
				.get(baseUrl)
				.then(res => assert.equal(200, res.statusCode))
				.catch(err => err)
	    });
	});
});
