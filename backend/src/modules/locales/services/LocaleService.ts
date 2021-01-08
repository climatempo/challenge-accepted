import { locales } from '../../../shared/constants';

class FindLocaleService {
  async execute() {
    return locales;
  }
}

export default new FindLocaleService();
