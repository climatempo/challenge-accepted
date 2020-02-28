const should = require("should");
const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const { baseUrl } = require('./server')
const baseLocale = require('../api/base/locales.json');

describe("Teste da entidade locale", function () {
  it("Deve receber ter o parametro locales", function (done) {
    request.get(
      {
        url : `${baseUrl}/locales`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        _body.should.have.property('locales')

        done();
      }
    );
  });

  it("Deve receber o parametro success como true", function (done) {
    request.get(
      {
        url : `${baseUrl}/locales`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        if( _body.should.have.property('success') ){
          expect(_body.success).is.equal(true);
        }

        done();
      }
    );
  });

  it("Deve receber a mesma quantidade de localidades do base/locales.json", function (done) {
    request.get(
      {
        url : `${baseUrl}/locales`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        if( _body.should.have.property('locales') ){
          expect(_body.locales.length).is.equal(baseLocale.length);
        }

        done();
      }
    );
  });

  it("Deve receber apenas a locale Osasco", function (done) {
    request.get(
      {
        url : `${baseUrl}/locales?q=Osasco`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        if( _body.should.have.property('locales') ){
          expect(_body.locales.length).is.equal(1);
          expect(_body.locales[0].name).is.equal("Osasco");
        }

        done();
      }
    );
  });
  // console.log(app.close());
});
