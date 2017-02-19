'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe('API Localização', () => {

    it('Inexistente na base', (done) => {
        chai.request(app)
            .get('/previsao')
            .query({q: 'São José dos Campos'}) // http://localhost:3000/previsao?q=S%C3%A3o%20Jos%C3%A9%20dos%20Campos
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('result');

                done();
            });
    });

    it('Existente full nome case insentive', (done) => {
        chai.request(app)
            .get('/previsao')
            .query({q: 'Osasco'}) //http://localhost:3000/previsao?q=Osasco
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('locale');
                expect(res.body).to.have.property('weather');
                expect(res.body).to.have.property('period');

                done();
            });
    });

    it('Localidade existente, previsão faltante', (done) => {
        chai.request(app)
            .get('/previsao')
            .query({q: 'lugar'}) //http://localhost:3000/previsao?q=lugar
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('result');

                done();
            });
    });


    it('Nome completo e case insentive', (done) => {
        chai.request(app)
            .get('/previsao')
            .query({q: 'osaSco'}) //http://localhost:3000/previsao?q=osaSco
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                expect(res.body).to.have.property('locale');
                expect(res.body).to.have.deep.property('locale.state', 'SP');
                expect(res.body).to.have.deep.property('locale.name', 'Osasco');

                expect(res.body).to.have.property('weather');
                expect(res.body).to.have.deep.property('weather[0].date', '2017-02-01');

                expect(res.body).to.have.property('period');

                done();
            });
    });


    it('Nome incompleto e case insentive', (done) => {
        chai.request(app)
            .get('/previsao')
            .query({q: 'sÃ'}) //http://localhost:3000/previsao?q=sÃ
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                expect(res.body).to.have.property('locale');
                expect(res.body).to.have.deep.property('locale.state', 'SP');

                expect(res.body).to.have.property('weather');
                expect(res.body).to.have.deep.property('weather[0].date', '2017-02-01');

                expect(res.body).to.have.property('period');

                done();
            });
    });

});