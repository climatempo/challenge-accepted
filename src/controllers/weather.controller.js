import BaseController from './base.controller';

class WeatherController extends BaseController {
  index(req, res) {
    return super.readBaseFile(req, res, 'weather.json');
  }
}

export default WeatherController;
