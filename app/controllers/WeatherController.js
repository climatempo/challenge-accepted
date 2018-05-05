const Weather = require("../models/Weather")

function getWeather(req, res) {
    const cityId = req.query.city_id

    let foundWeather = Weather.filter(data => {
        if (data.locale.id == parseInt(cityId)) {
            return data
        }
    })

    if (typeof foundWeather !== "undefined" && foundWeather.length > 0) {
        return res.json({
            data: { city: foundWeather[0] }
        })
    }

    return res.status(400).json({
        message: "Informação climática não encontrada para essa cidade"
    })
}

module.exports = { getWeather }
