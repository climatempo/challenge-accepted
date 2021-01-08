import { weather, IWeather } from '../../../shared/constants';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  localeId: number;
}

class WeatherService {
  async execute({ localeId }: IRequest): Promise<IWeather | undefined> {
    const climate = weather.find(item => item.locale.id === localeId);

    if (!climate) {
      throw new AppError('City not found', 400, 'city-not-found');
    }

    return climate;
  }
}

export default new WeatherService();
