const request = require('supertest');
const app = require('../../src/app');

describe('Response', () => {
    it ('should return values to customer', async () => {
        const response = await request(app)
            .get('/locales');
        expect(response.status).toBe(200);
    });
});