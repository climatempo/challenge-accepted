//add a lib path e convertendo os arquibos para json
const path = require("path");
const fs = require("fs");
const locales = JSON.parse(fs.readFileSync(path.join(__dirname,"data","locales.json"), "utf-8"));
const weatherData = JSON.parse(fs.readFileSync(path.join(__dirname,"data","weather.json"), "utf-8"));

//add a lib express e definindo a porta
const express = require("express");
const cors = require("cors");
const { idValidation, temperatureUnitValidation, precipitationUnitValidation } = require("./validation");
const { converterTemperature, converterPrecipitation } = require("./utils/unitConverter");
const removeAccent = require("./utils/removeAccent");
const app = express();
const PORT = 8080;

app.use(cors())


// locales?filter=<string>
app.get("/locales", (req, res) => {
    const filter = req.query.filter
    if(filter != undefined){

        const filteredCities = []
        const unaccentedFilter = removeAccent(filter)

        for(const city of locales){
            const unaccentedCityName = removeAccent(city.name)
            const cityUpperCase = unaccentedCityName.toUpperCase()

            if(cityUpperCase.indexOf(unaccentedFilter.toUpperCase()) != -1){
                filteredCities.push(city)
            }
        }
        res.status(200).json(filteredCities)
    } else {    
        res.status(200).json(locales)
    }
    
});

// /forecast?id=<number>&temperatureUnit=<C,F>&precipitationUnit=<mm,inch>
app.get("/forecast", (req, res) => {
    const {id, temperatureUnit, precipitationUnit} = req.query

    try {
        idValidation(id)
        temperatureUnitValidation(temperatureUnit)
        precipitationUnitValidation(precipitationUnit)
    
        let forecast

        for(const weatherDataCity of weatherData){
            if(Number(id) === weatherDataCity.locale.id){
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
});

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
});