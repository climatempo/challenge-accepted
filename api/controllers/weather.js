const weathers = require('../base/weather.json')

module.exports = app => {
    const weather = (req, res) => {
        const localeId = req.query.id
        if(localeId && localeId !== null){
            weathers.map(weather => {
                if(weather.locale.id === Number(localeId)){
                    res.send(weather)
                }
            })
        } else {
            res.send(weathers)
        }
    }

    return { weather }
}