const assert = require('assert');
const axios = require('axios');

const { getLocale } = require('../routes/locales.js');

describe('Climatempo Tests', () => {
	describe("GET /locales/", () => {

		const baseUrl = 'localhost:5000/locales/'
		const baseParams = 'Osasco';
		
	    it("Returns status code 200", async () => {
			
			await axios
				.get(baseUrl)
				.then(res => {
					assert.equal(200, res.statusCode);
				})
				.catch(err => err)
	    });

	     it("Returns data expected to Osasco", async () => {
			
			const expected = [{ 
				id: 3735,
			    name: 'Osasco',
			    state: 'SP',
			    latitude: -23.532,
			    longitude: -46.792 
			}] 
			
			await axios
				.get(baseUrl + baseParams)
				.then(res => {
					assert.equal(expected, res.data);
				})
				.catch(err => err)
	    });

	});
});
