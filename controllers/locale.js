const locale = require('../models/locale');

const index = (req, res, next) => {
    const term = req.query.term;

    try {
        const result = locale(term);
        return (result === undefined || result === null) ? res.status(404).json() : res.json(result);
    } catch (err) {
        return res.status(404).json(err);
    }
}

module.exports = index;