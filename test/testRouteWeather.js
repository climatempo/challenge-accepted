const assert = require('assert');
const axios = require('axios');

const { getWeather } = require('../routes/weather.js');

describe('Climatempo Tests', () => {
	describe("GET /weather-forecasts", () => {
		const baseUrl = 'localhost:5000/weather-forecasts/'
		const baseParams = 3735;

	    it("returns status code 200", async () => {
			await axios
				.get(baseUrl)
				.then(res => assert.equal(200, res.statusCode))
				.catch(err => err)
	    });

	     it("returns data expected", async () => {
	     	const expected = [{
			    "period": {
			      "begin": "2017-02-01",
			      "end": "2017-02-07"
			    },
			    "locale": {
			      "id": 3735,
			      "name": "Osasco",
			      "state": "SP",
			      "latitude": -23.5320,
			      "longitude": -46.7920
			    },
			    "weather": [
			      {
			        "date": "2017-02-01",
			        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			        "temperature": {
			          "min": 20,
			          "max": 28
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": 20
			        }
			      },
			      {
			        "date": "2017-02-02",
			        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			        "temperature": {
			          "min": 21,
			          "max": 30
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": 10
			        }
			      },
			      {
			        "date": "2017-02-03",
			        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			        "temperature": {
			          "min": 22,
			          "max": 31
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": 15
			        }
			      },
			      {
			        "date": "2017-02-04",
			        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			        "temperature": {
			          "min": 22,
			          "max": 32
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": 16
			        }
			      },
			      {
			        "date": "2017-02-05",
			        "text": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
			        "temperature": {
			          "min": 23,
			          "max": 32
			        },
			        "rain": {
			          "probability": 67,
			          "precipitation": 19
			        }
			      },
			      {
			        "date": "2017-02-06",
			        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			        "temperature": {
			          "min": 22,
			          "max": 33
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": 8
			        }
			      },
			      {
			        "date": "2017-02-07",
			        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			        "temperature": {
			          "min": 25,
			          "max": 30
			        },
			        "rain": {
			          "probability": 60,
			          "precipitation": "11"
			        }
			      }
			    ]
	  		}]

			await axios
				.get(baseUrl + baseParams)
				.then(res => assert.equal(expected, res.data))
				.catch(err => err)
	    });

	});
});
