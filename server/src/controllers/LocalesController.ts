import { Request, Response } from 'express';
import ListLocalesService from '../services/ListLocalesService';

class LocalesController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listLocales = new ListLocalesService();

      const locales = await listLocales.call();

      return response.status(200).json(locales);
    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}

export default LocalesController;
