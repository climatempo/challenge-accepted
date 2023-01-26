const path = require("path");
const fs = require("fs");
const locales = JSON.parse(fs.readFileSync(path.join(__dirname,"..","data","locales.json"), "utf-8"));
const removeAccent = require('../utils/removeAccent')

class LocaleController {
    getLocales(req, res) {
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
    }
}

module.exports = new LocaleController()