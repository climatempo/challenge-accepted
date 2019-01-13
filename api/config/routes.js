module.exports = app => {
    app.post('/locales', app.controllers.locales.locale)
    app.post('/weather', app.controllers.weather.weather)
}