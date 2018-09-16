const baseRoutes = Object.freeze({
    weather: "/weather",
    locales: "/locales"
});

exports.weatherRoutes = Object.freeze({
    getByName: baseRoutes.weather + '/:name',
})

exports.localesRoutes = Object.freeze({
    getAll: baseRoutes.locales
})