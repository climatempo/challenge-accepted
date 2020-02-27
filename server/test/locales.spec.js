const should = require("should");
const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const urlBase = "https://api.magicthegathering.io/v1";
const { baseUrl } = require('./server')
const baseLocale = require('../api/base/locales.json');

describe("Teste da entidade locale", function () {
  // a funcao it eh o que vamos testar realmente, neste caso o endpoint /cards, que deve retornar no maximo 100 cartas
  it("Deve receber a mesma quantidade de localidades do base/locales.json", function (done) {
    request.get(
      {
        url : `${baseUrl}/locales`
      },
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // utilizando a funcao expect do chai, vamos verificar se o resultado da chamada foi sucesso (200)
        // expect(response.statusCode).to.equal(200);

        // agora, verificamos se retornou a propriedade cards
        if( _body.should.have.property('locales') ){
          //se retornou, vamos verificar o tamanho, deve ser menor ou igual a 100 itens
          console.log(_body.locales);
          expect(_body.locales.length).is.equal(baseLocale.length);
        }

        done(); // avisamos o test runner que acabamos a validacao e ja pode proseeguir
      }
    );
  });
});
