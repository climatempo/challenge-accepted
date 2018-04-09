import express from "express";
import {
  findWeathers,
  findWeathersByLocale
} from "../controllers/weatherController";
import {
  findLocales
} from "../controllers/localeController";


const router = express.Router();

router.get("/health-check", (req, res) => {
  res.send("Ok");
});

//Weather
router.get("/weathers", findWeathers);
router.get("/weathers/:locale", findWeathersByLocale);

//Locale
router.get("/locales", findLocales);

export default router;
