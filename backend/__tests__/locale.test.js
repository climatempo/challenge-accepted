const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('Locale Endpoints', () => {
    it('should get all locales', async (done) => {
        const localeName = "Osasco";
        const res = await request
            .get(`/locale?name=${localeName}`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.body.length).toBeGreaterThan(0);
        done();
    })

    it('should not get any locales', async (done) => {
        const localeName = "Recife";
        const res = await request
            .get(`/locale?name=${localeName}`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.body.length).toBe(0);
        done();
    })
})