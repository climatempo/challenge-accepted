const request = require('supertest');
const app = require('../../src/app');

describe('Response', () => {
    it ('should return values of São Paulo to customer', async () => {
        const response = await request(app)
            .get('/weathers/São Paulo');
        expect(response.status).toBe(200);
    });

    it ('should return values of Osasco to customer', async () => {
        const response = await request(app)
            .get('/weathers/Osasco');
        expect(response.status).toBe(200);
    });
});