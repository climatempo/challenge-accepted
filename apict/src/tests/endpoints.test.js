const request = require('supertest');
const app = require('../index');

describe('Testing Routes', () => {
    test('Testing locale search route', () => {
        return request(app).get("/locale/find/osa").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
    test('Testing weather search by locale', () => {
        return request(app).get("/weather/3735").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})