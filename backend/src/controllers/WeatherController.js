const Weather = require('../../base/weather.json');

module.exports = {
  async index(req, res) {
    const { locale_id } = req.params;

    const weathers = Weather.filter(weather => String(weather.locale.id) === locale_id);

    return res.json(weathers);
  }  
};
