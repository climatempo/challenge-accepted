import { Router, Request, Response } from 'express';
import LocalesController from '../controllers/LocalesController';
import WeatherController from '../controllers/WeatherController';
import getClient from '../client/elasticsearch';

var locales = require('../../base/locales.json');

const routes = Router();

routes.get('/clima/elastic/locales/findall', LocalesController.findAllElastic);
routes.get('/', async (request: Request, response: Response) => {
    
    const client = getClient();

    const result = await client.index({
        index: 'elastic_locales',
        type: 'type_elastic_locales',
        body: {
            locales
        }
    });

    return response.json(result);
});

routes.get('/clima/locales/findall', LocalesController.findAll);
routes.get('/clima/weather/findall', WeatherController.findAll);

export default routes;

