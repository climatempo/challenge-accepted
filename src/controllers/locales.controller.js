import BaseController from './base.controller';

class LocalesController extends BaseController {
  index(req, res) {
    return super.readBaseFile(req, res, 'locales.json');
  }
}

export default LocalesController;
