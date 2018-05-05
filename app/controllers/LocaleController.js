const Locale = require("../models/Locale")

function getLocale(req, res) {
    const requestedCity = req.query.city

    let foundCity = Locale.filter(
        locale => locale.name.toUpperCase() == requestedCity.toUpperCase()
    )

    if (typeof foundCity !== "undefined" && foundCity.length > 0) {
        return res.json({
            data: { city: foundCity[0] }
        })
    }

    return res.status(400).json({
        message: "Cidade não encontrada"
    })
}

module.exports = { getLocale }
