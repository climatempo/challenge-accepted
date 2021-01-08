import { Request, Response } from 'express';
import LocaleService from '../services/LocaleService';

class LocaleController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const data = await LocaleService.execute();

      return response.status(200).json(data);
    } catch (err) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new LocaleController();
