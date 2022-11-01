import { Request, Response } from "express";
import weatherService from "../services/weather";


class WeatherController {
  get(req: Request, res: Response) {
    const data = weatherService.getWeather(req.body.id);

    if (!data) {
      return res.status(404).send({ message: "Not found" });
    }

    return res.send(data);
  }
}

export default new WeatherController();
