import * as request from 'supertest';
import app from '../index';

describe('GET /locales', () => {
	it('should return message and locales data', async () => {
		const res = await request(app).get('/locales');
		
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual('Locales searched successfully');
		expect(res.body.locales).toEqual(expect.arrayContaining([expect.objectContaining({
			id: expect.any(Number),
			name: expect.any(String),
			state: expect.any(String),
			latitude: expect.any(Number),
			longitude: expect.any(Number),
		})]));
	});

	it('should return message and locales data passing name to query', async () => {
		const res = await request(app).get('/locales?name=OsaScO');
		
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual('Locales searched successfully');
		expect(res.body.locales).toEqual(expect.arrayContaining([expect.objectContaining({
			id: expect.any(Number),
			name: expect.any(String),
			state: expect.any(String),
			latitude: expect.any(Number),
			longitude: expect.any(Number),
		})]));
	});

	it('should return message and empty locales passing incorrect name to query', async () => {
		const res = await request(app).get('/locales?name=qwertyuiopasdfgçhçlzxcv');

		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual('Locales searched successfully');
		expect(res.body.locales).toEqual([]);
	});
});


describe('GET /weather', () => {
	it('should return message and weatherDetails data passing localeName to query', async () => {
		const res = await request(app).get('/weather?localeName=osAsCo');
		
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual('Weather searched successfully');
		expect(res.body.weatherDetails.period).toEqual(expect.objectContaining({
			begin: expect.any(String),
			end: expect.any(String),
		}));
		expect(res.body.weatherDetails.locale).toEqual(expect.objectContaining({
			id: expect.any(Number),
			name: expect.any(String),
			state: expect.any(String),
			latitude: expect.any(Number),
			longitude: expect.any(Number),
		}));
		expect(res.body.weatherDetails.weather.length).toBeGreaterThan(0);
		
		expect(res.body.weatherDetails.weather).toEqual(expect.arrayContaining([
			expect.objectContaining({
				date: expect.any(String),
				text: expect.any(String),
				temperature: expect.objectContaining({
					min: expect.any(Number),
					max: expect.any(Number),
				}),
				rain: expect.objectContaining({
					probability: expect.any(Number),
					precipitation: expect.any(Number),
				}),
			})
		]));
	});

	it('should return status 400, message and weatherDetails null passing incorrect localeName to query', async () => {
		const res = await request(app).get('/weather?localeName=qwertyuiopasdfgçhçlzxcv');
		
		expect(res.statusCode).toBe(400);
		expect(res.body.message).toEqual('Weather with locale qwertyuiopasdfgçhçlzxcv not found');
		expect(res.body.weatherDetails).toBeNull();
	});

	it('should return status 400, message and weatherDetails null', async () => {
		const res = await request(app).get('/weather');
		
		expect(res.statusCode).toBe(400);
		expect(res.body.message).toEqual('Locale name query cannot be null');
		expect(res.body.weatherDetails).toBeNull();
	});

});