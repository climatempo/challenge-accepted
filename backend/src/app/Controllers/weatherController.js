const weathers = require('../../database/weather.json');

class WeatherController {
  /** return weathers by id city */
  async show(req, res) {
    const { id } = req.params;
    const result = await weathers.filter(
      weather => weather.locale.id === Number(id)
    );
    return res.json(result);
  }
}

module.exports = new WeatherController();
