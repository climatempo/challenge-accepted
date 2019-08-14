const locales = require('../../base/locales.json');

module.exports = {
    index(req, res) {
        try {
            res.status(200).json(locales);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}