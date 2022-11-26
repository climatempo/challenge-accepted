import { Router } from 'express';
import SearchCityController from '../Controllers/SearchCity.controller';
import PingPongController from '../Controllers/PingPong.controller';
import source from './Source.route';
import city from './City.route';

const routes = Router();
routes.get('/search/:name', SearchCityController);
routes.get('/ping', PingPongController);

routes.use('/source', source);
routes.use('/city', city);

export default routes;