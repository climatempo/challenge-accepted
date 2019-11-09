const locales = require('../../database/locales.json');

class LocalesController {
  /** return all cities */
  async index(req, res) {
    res.json(locales);
  }

  /** return city by name */
  async show(req, res) {
    const { search } = req.query;
    const result = locales.filter(weather => weather.name === search);
    return res.json(result);
  }
}

module.exports = new LocalesController();
