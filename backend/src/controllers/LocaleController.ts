import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../Context";
import { responseErrorHandler } from "../errorHandlerApi";

class LocaleController {
  /**
   * Get all locale
   *
   * @param {Request} req
   * @param {Response} res
   * @memberof WeatherController
   */
  async getAllLocale(req: Request, res: Response) {
    try {
      const locales = await Context.getInstance().db.locales.find({});

      res.status(HTTPStatus.OK).json({
        data: locales,
        message: "OK",
      });
    } catch (err) {
      responseErrorHandler(err, res);
    }
  }
}
export default new LocaleController();
