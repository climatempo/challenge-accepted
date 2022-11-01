import { Request, Response } from "express";
import localesService from "../services/locales";

class LocalesController {
  get(req: Request, res: Response) {
    const data = localesService.getLocales(req.body.query);
    return res.send(data);
  }
}

export default new LocalesController();
