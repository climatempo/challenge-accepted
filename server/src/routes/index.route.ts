import { Router } from 'express';
import indexController from '../controllers/index.controller';

const route = Router();

route.get('/locales', indexController.getLocaleByName);
route.get('/weather', indexController.getWeatherByLocale);

export default route;