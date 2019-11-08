const Locales = require('../../base/locales.json');
const Util = require('../utils');

module.exports = {
  async show(req, res) {
    const { name } = req.query

    const locale = Locales.filter(l =>
        Util.removeSpecialCharacteres(l.name).includes(Util.removeSpecialCharacteres(name))
    );

    return res.json(locale)
  }
}