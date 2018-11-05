'use strict';

const temp = require("../base/weather.json");

function catchWeather(debug, date, text, min, max, proba, local){
    for(var i = 0; i < temp.length; i++){
        if(temp[i].locale.name === local){
            temp[i].weather.filter(function(filt){
                debug.push(filt.date);
                date.push(filt.text);
                text.push(filt.temperature.min);
                min.push(filt.temperature.max);
                max.push(filt.rain.probability);
                proba.push(filt.rain.precipitation);
            });
        }
    }
}

module.exports = catchWeather;