import { Router } from 'express';
import SearchCityController from '../Controllers/SearchCity.controller';
import PingPongController from '../Controllers/PingPong.controller';
import city from './City.route';

const routes = Router();
routes.get('/search/:name', SearchCityController);
routes.get('/ping', PingPongController);

routes.use('/city', city);

export default routes;