import { Router } from 'express';
import indexController from '../controllers/index.controller';

const route = Router();

route.get('/locales', indexController.getLocales);
route.get('/weather', indexController.getWeatherByLocaleName);

export default route;