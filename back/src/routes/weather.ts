import { Router } from "express";
import weatherController from "../controllers/weather";

const weatherRouter = Router();

weatherRouter.get("/weather", weatherController.get);

export default weatherRouter;
