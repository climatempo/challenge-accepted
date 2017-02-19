'use strict';

const locales = require('../base/locales.json');
const weather = require('../base/weather.json');
const Utils = require('../utils/Utils');

class HomeController {

    static findByLocale(req, res) {

        const params = Utils.extract(req);
        const query = new RegExp(`${params.q}`, 'i');
        let num_locales = locales.length;
        let num_weather = weather.length;
        let locale_id = 0;

        const getWeather = (id) =>{
          while (num_weather > 0){
              if(weather[num_weather - 1].locale.id === id){
                res.json(weather[num_weather - 1]);
                num_weather = 0; //Evita voltas desnecessárias
              }else if(!(num_weather - 1)){
                  res.json({result: 0});
              }
              num_weather--;
          }
        };


        while (num_locales > 0) {
            if (query.test(locales[num_locales - 1].name)) {
                getWeather(locales[num_locales - 1].id);
                num_locales = 0; //Evita voltas desnecessárias
            } else if (!(num_locales - 1)) {
                res.json({result: 0});
            }
            num_locales--;
        }
    }
}

module.exports = HomeController;