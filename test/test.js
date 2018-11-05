'use strict';

var chai = require('chai');
var server = require ('../app');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Testes', function(){
    
    it('Index', function(done){

        chai.request(server)
            .get('/')
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(err).to.be.null;

                done();
            });
    });

    it('Osasco', function(done){

        chai.request(server)
            .get('/osasco')
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(err).to.be.null;

                done();
            })
    })

    it('São Paulo', function(done){

        chai.request(server)
            .get('/sp')
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(err).to.be.null;

                done();
            })
    })

    it('Página inexistente', function(done){ //Teste proposital para página não existente

        chai.request(server)
            .get('/sao')
            .end(function(err, res){
                expect(res).to.have.status(404);
                expect(err).to.be.null;

                done();
            })
    })

});
