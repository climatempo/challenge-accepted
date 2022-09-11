const path = require("path");
const fs = require("fs");
const weatherData = JSON.parse(fs.readFileSync(path.join(__dirname,"..","data","weather.json"), "utf-8"));
const { idAndCityNameValidation, temperatureUnitValidation, precipitationUnitValidation } = require("../validation");
const { converterTemperature, converterPrecipitation } = require("../utils/unitConverter");
const removeAccent = require("../utils/removeAccent");

class ForecastController {
    getForecast(req, res) {
        const {id, temperatureUnit, precipitationUnit} = req.query
        const cityName = req.query.cityName !== undefined ? removeAccent(req.query.cityName.toUpperCase()) : ''

        try {
            idAndCityNameValidation(id, cityName)
            temperatureUnitValidation(temperatureUnit)
            precipitationUnitValidation(precipitationUnit)
        
            let forecast

            for(const weatherDataCity of weatherData){
                if(id !== undefined && Number(id) === weatherDataCity.locale.id){
                    forecast = weatherDataCity
                } else if(cityName !== '' && cityName === removeAccent(weatherDataCity.locale.name.toUpperCase())) {
                    forecast = weatherDataCity
                }
            }
            
            if(forecast != undefined){
                if(forecast.units.temperature != temperatureUnit){
                    for(const data of forecast.weather){
                        data.temperature = converterTemperature(
                            data.temperature, 
                            forecast.units.temperature, 
                            temperatureUnit
                        )
                    }
                    forecast.units.temperature = temperatureUnit
                }
                if(forecast.units.precipitation != precipitationUnit){
                    for(const data of forecast.weather){
                        data.rain.precipitation = converterPrecipitation(
                            data.rain.precipitation, 
                            forecast.units.precipitation, 
                            precipitationUnit
                        )
                    }
                    forecast.units.precipitation = precipitationUnit
                }
                res.status(200).json(forecast)
            } else {
                res.status(404).json({
                    error: "Cidade não encontrada"
                })
            }    
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}

module.exports = new ForecastController()