import { Router } from "express";

import weatherController from "../controllers/weatherController";

let Routes = new Router();

Routes.get("/weather/:locale", weatherController.getLocale);

export default Routes;
