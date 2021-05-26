const locales = require('../model/locales');

class LocalesController {
    async index(req, res){
        const data = await locales.find({});

        return res.json(data);
    }
}

module.exports = new LocalesController();