import api from './index';

class WeatherService {
  async getWeather(localeId) {
    return await api.get(`/weather/${localeId}/locale`);
  }
}

export default new WeatherService();