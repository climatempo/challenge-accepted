import { Router } from 'express';
import LocaleController from '../Controllers/Locale.controller';
import InstantController from '../Controllers/Instant.controller';
import WeatherController from '../Controllers/Weather.controller';
import WeathersController from '../Controllers/Weathers.controller';

const city = Router();

city.get('/:id', LocaleController);
city.get('/:id/now', InstantController);
city.get('/:code/weather', WeatherController);
city.get('/:code/weathers', WeathersController);

export default city;