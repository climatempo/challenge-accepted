const weather = require('../../base/weather.json');

module.exports = {
    index(req, res) {
        try {
            const result = weather.filter(value => {
                if (value.locale.name == req.params.locale) {
                    return value;
                }
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}