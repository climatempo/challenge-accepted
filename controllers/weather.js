const weather = require('../models/weather');

const show = (req, res, next) => {
    const localeId = Number(req.params.locale);

    try {
        const result = weather(localeId);
        return (result === undefined || result === null) ? res.status(404).json() : res.json(result);
    } catch (err) {
        return res.status(404).json(err);
    }
}

module.exports = show;