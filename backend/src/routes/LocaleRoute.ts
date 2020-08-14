import { Request, Response } from "express";
import localeController from "../controllers/LocaleController";

class LocaleRoute {
  /**
   * Get all locale
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof LocaleRoute
   */
  async getAllLocale(req: Request, res: Response) {
    return localeController.getAllLocale(req, res);
  }
}

export default new LocaleRoute();
