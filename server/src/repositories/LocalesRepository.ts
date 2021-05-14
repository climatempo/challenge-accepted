import locales from '../base/locales';
import Locale from '../entities/Locale';

class LocalesRepository {
  public async listAll(): Promise<Locale[]> {
    return locales;
  }
}

export default LocalesRepository;
