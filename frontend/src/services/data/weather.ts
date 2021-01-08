import api from "../api";

class WeatherData {
  show(localeId: number) {
    return api.get(`weather/${localeId}`);
  }
}

export default new WeatherData();
