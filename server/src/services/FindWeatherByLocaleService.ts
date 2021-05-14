import AppError from '../errors/AppError';
import Weather from '../entities/Weather';
import WeatherRepository from '../repositories/WeatherRepository';

interface IRequest {
  localeId: number;
}

class FindWeatherByLocaleService {
  async call({ localeId }: IRequest): Promise<Weather | undefined> {
    const weatherRepository = new WeatherRepository();

    const localWeather = weatherRepository.findByLocale(localeId);

    if (!localWeather) {
      throw new AppError('Locale not found', 404);
    }

    return localWeather;
  }
}

export default FindWeatherByLocaleService;
