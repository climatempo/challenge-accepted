import localeModel from "../models/localeModel";
import weatherModel from "../models/weatherModel";

class WeatherController {
  getLocale(req, res) {
    let search = req.params.locale;
    let locale = localeModel.getLocaleByName(search);

    if (locale) {
      res.json(weatherModel.getWeatherByIdLocale(locale.id));
    } else {
      res
        .status(500)
        .send({ message: `Nenhuma localidade encontrada para ${search}` });
    }
  }
}

const Controller = new WeatherController();
export default Controller;
