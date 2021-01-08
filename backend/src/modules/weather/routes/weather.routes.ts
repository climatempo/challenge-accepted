import { Router } from 'express';
import WeatherController from '../controllers/WeatherController';

const routes = Router();

routes.get('/:id', WeatherController.show);

export default routes;
