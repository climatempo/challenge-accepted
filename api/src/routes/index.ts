import { Router } from "express";
import cors from "cors";

import localesRouter from "./locales.routes";
import weatherRouter from "./weather.routes";

const routes = Router();
// weather.json
// locales.json
routes.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  routes.use(cors());
  next();
});

routes.use("/locales", localesRouter);
routes.use("/weather", weatherRouter);

export default routes;
