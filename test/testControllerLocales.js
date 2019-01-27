const assert = require('assert');

const { getLocaleByName } = require('../controller/locales.js');

describe('Climatempo Tests', () => {
	describe("getLocaleByName()", () => {
		it('To find city Osasco', async() => {
			const expected = [{ 
				id: 3735,
			    name: 'Osasco',
			    state: 'SP',
			    latitude: -23.532,
			    longitude: -46.792 
			}] 

			const baseName = 'Osasco'
			const result = await getLocaleByName(baseName);
			assert.deepEqual(result, expected);

		});
	});
});