import { Router } from 'express';
import WeatherController from '../controllers/WeatherController';

const routes = Router();
const weatherController = new WeatherController();

routes.get('/locale/:id', weatherController.show);

export default routes;
