import data from "../../base/weather";

class WeatherModel {
  getWeatherByIdLocale(idLocale) {
    return data.find(item => item.locale.id == idLocale);
  }
}

const Model = new WeatherModel();
export default Model;
