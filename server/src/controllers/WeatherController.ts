import { Request, Response } from 'express';
import FindWeatherByLocaleService from '../services/FindWeatherByLocaleService';

class WeatherController {
  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id: localeId } = request.params;
      const findWeatherByLocale = new FindWeatherByLocaleService();
      const weather = await findWeatherByLocale.call({
        localeId: Number(localeId),
      });

      return response.status(200).json(weather);
    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}

export default WeatherController;
