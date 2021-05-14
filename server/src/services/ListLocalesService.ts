import Locale from '../entities/Locale';
import LocalesRepository from '../repositories/LocalesRepository';

class ListLocalesService {
  async call(): Promise<Locale[]> {
    const localesRepository = new LocalesRepository();

    return localesRepository.listAll();
  }
}

export default ListLocalesService;
