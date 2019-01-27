const assert = require('assert');
const axios = require('axios');

const baseUrl = 'localhost:5000/locales/'
const { getLocale } = require('../routes/locales.js');

describe('Climatempo Tests', () => {
	describe("GET /locales", () => {
	    it("returns status code 200", async () => {
			await axios
				.get(baseUrl)
				.then(res => assert.equal(200, res.statusCode))
				.catch(err => err)
	    });
	});
});
