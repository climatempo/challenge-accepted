import { Request, Response } from 'express';
import WeatherService from '../services/WeatherService';

class WeatherController {
  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id: localeId } = request.params;
      const data = await WeatherService.execute({ localeId: Number(localeId) });

      return response.status(200).json(data);
    } catch (err) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new WeatherController();
