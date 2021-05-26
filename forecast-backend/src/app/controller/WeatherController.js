const weather = require('../model/weather');

class WeatherController {
    async index(req, res){
        try{
            let city = req.query.city;
            let data;
            
            if(city){
                data = await weather.find({'locale.name': { $regex: new RegExp(`^${city}$`), $options: 'i' }});
                
                if(data==''){
                    return res.status(400).json({
                        status: 'failure',
                        message: `Não foram encontradas previsões para a cidade de ${city}`
                    });
                }
                return res.status(200).json(data);
            }

            data = await weather.find({});
            return res.status(200).json(data);
        }catch(error){
            res.status(500).json({
                status: 'failure',
                message: error.message
            });
        }
    }
}

module.exports = new WeatherController();