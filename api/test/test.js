import test from 'tape';
import supertest from 'supertest';
import app from '../index';
import weatherJson from "../base/weather.json";
import localesJson from "../base/locales.json";


test('GET /api/locales', (t) => {
    supertest(app)
        .get('/api/locales')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(jsonEqual(res.body, localesJson), "Resposta Correta")
            t.end()
        })
})

test('GET /api/weathers', (t) => {
    supertest(app)
        .get('/api/weathers')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(jsonEqual(res.body, weatherJson), "Resposta Correta")
            t.end()
        })
})

test('GET /api/weathers/Osasco', (t) => {
    supertest(app)
        .get('/api/weathers/Osasco')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(jsonEqual(res.body, weatherJson[0]), "Resposta Correta")
            t.end()
        })
})

test('GET /api/weathers/São Paulo', (t) => {
    supertest(app)
        .get('/api/weathers/São Paulo')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(jsonEqual(res.body, weatherJson[1]), "Resposta Correta")
            t.end()
            process.exit();
        })
})



function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
