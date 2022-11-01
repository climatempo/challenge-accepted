import { Router } from "express";
import localesController from "../controllers/locales"

const localesRouter = Router()

localesRouter.get("/locales", localesController.get)

export default localesRouter;
