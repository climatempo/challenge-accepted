import { Request, Response } from "express";
import weatherController from "../controllers/WeatherController";

class WeatherRoute {
  /**
   * Get weather
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof WeatherRoute
   */
  async getWeather(req: Request, res: Response) {
    return weatherController.getWeather(req, res);
  }
}

export default new WeatherRoute();
