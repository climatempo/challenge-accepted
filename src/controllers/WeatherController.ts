import { Request, Response } from 'express';
var weather = require('../../base/weather.json');


class WeatherController {
    
    async findAll(request: Request, response: Response)  {
    
        const { locale } = request.query;        

        if(locale == null) {
            var results = weather;
        } else {
            results = weather.filter(function(we: any) {
                return we.locale.name == locale;
            })
        }
        
        return await response.json(results);
    }

}

export default new WeatherController;