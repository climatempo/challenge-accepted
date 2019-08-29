// import { loaderWithCache } from '../../utils/cache';
// import { esGet } from '../../utils/elasticsearch';

export default class Controller {
  static async index(_, req) {
    req.send('hello!!');
  }
}
