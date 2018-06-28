'use strict';

var assert = require('assert'); 
var request = require('request');

var jsonResult = '[ \'Osasco\',{ date: \'2017-02-01\',text: \'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.\', temperature_min: 20,temperature_max: 28,rain_prob: 60,rain_prec: 20 },{ date: \'2017-02-02\',text: \'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.\', temperature_min: 21,temperature_max: 30,rain_prob: 60,rain_prec: 10 },{ date: \'2017-02-03\',text: \'Sol com algumas nuvens. Chove rápido durante o dia e à noite.\',temperature_min: 22,temperature_max: 31,rain_prob: 60,rain_prec: 15 },{ date: \'2017-02-04\',text: \'Sol com algumas nuvens. Chove rápido durante o dia e à noite.\',temperature_min: 22,temperature_max: 32,rain_prob: 60,rain_prec: 16 },{ date: \'2017-02-05\',text: \'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.\',temperature_min: 23,temperature_max: 32,rain_prob: 67,rain_prec: 19 },{ date: \'2017-02-06\',text: \'Sol com algumas nuvens. Chove rápido durante o dia e à noite.\',temperature_min: 22,temperature_max: 33,rain_prob: 60,rain_prec: 8 },{ date: \'2017-02-07\', text: \'Sol com algumas nuvens. Chove rápido durante o dia e à noite.\', temperature_min: 25,  temperature_max: 30,rain_prob: 60,rain_prec: \'11\' } ]';


describe('Tests', function(){
    
    //it são os testes que serão executados
    it('Testing the return of the request is an array', function() {
        //request vai fazer uma requisição ao servidor com o local Osasco
        request('http://localhost:5000/Osasco', function (response, body) {
            //o código esperado é igual a 200
            assert.equal(response.statusCode, 200);
            assert.equal(response.body, jsonResult); 
        });
    });
    
    it('Testing name different the Osasco / São Paulo', function() {
        request('http://localhost:5000/s', function (response) {
            //o código esperado é igual ao 404
            assert.error(response.statusCode, 404);
        });
    });

});
