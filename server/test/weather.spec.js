const should = require("should");
const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const { baseUrl } = require('./server')
const baseWeather = require('../api/base/weather.json');

describe("Teste da entidade locale", function () {
  it("Deve receber ter o parametro weathers", function (done) {
    request.get(
      {
        url : `${baseUrl}/weather/by-locale?locale_id=${baseWeather[0].locale.id}`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        _body.should.have.property('weathers')

        done();
      }
    );
  });

  it("Deve receber o parametro success como true", function (done) {
    request.get(
      {
        url : `${baseUrl}/weather/by-locale?locale_id=${baseWeather[0].locale.id}`
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

  it("Deve receber a mesma quantidade de weathers do base/weather.json", function (done) {
    request.get(
      {
        url : `${baseUrl}/weather/by-locale?locale_id=${baseWeather[0].locale.id}`
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        if( _body.should.have.property('weathers') ){
          expect(_body.weathers[0].weather.length).is.equal(baseWeather[0].weather.length);
        }

        done();
      }
    );
  });

  it("Deve retornar o success false", function (done) {
    request.get(
      {
        url : `${baseUrl}/weather/by-locale`
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
          expect(_body.success).is.equal(false);
        }

        done();
      }
    );
  });
  // console.log(app.close());
});
