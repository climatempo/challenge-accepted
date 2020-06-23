import { Router } from "express";
import localesRouter from "./locales.routes";
import weatherRouter from "./weather.routes";

const routes = Router();
// weather.json
// locales.json

routes.use("/locales", localesRouter);
routes.use("/weather", weatherRouter);

export default routes;
