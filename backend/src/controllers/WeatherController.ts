import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../Context";
import { responseErrorHandler } from "../errorHandlerApi";
import { NotFoundError } from "../errors";

class WeatherController {
  /**
   * Get weather
   *
   * @param {Request} req
   * @param {Response} res
   * @memberof WeatherController
   */
  async getWeather(req: Request, res: Response) {
    const { cityName } = req.params;

    try {
      const locale = await Context.getInstance().db.locales.findOne({ where: { name: cityName } });

      if (!locale) {
        throw new NotFoundError(`Cidade não encontrada: ${cityName}`);
      }

      const weather = await Context.getInstance().db.weathers.find({
        order: {
          date: "DESC",
        },
        where: { localeId: locale.id },
      });

      res.status(HTTPStatus.OK).json({
        data: weather,
        message: "OK",
      });
    } catch (err) {
      responseErrorHandler(err, res);
    }
  }
}
export default new WeatherController();
