import LocalesController from './controllers/locales.controller';
import WeatherController from './controllers/weather.controller';

const ROUTES = (app) => {
  app.get('/locales', (req, res) => {
    new LocalesController().index(req, res);
  });
  app.get('/weathers', (req, res) => {
    new WeatherController().index(req, res);
  });
};

export default ROUTES;
