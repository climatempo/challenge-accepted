import Weather from '../entities/Weather';
import weather from '../base/weather';

class WeatherRepository {
  public async findByLocale(localeId: number): Promise<Weather | undefined> {
    const localeWeather = weather.find(item => item.locale.id === localeId);

    if (!localeWeather) {
      return localeWeather as undefined;
    }

    return localeWeather as Weather;
  }
}

export default WeatherRepository;
