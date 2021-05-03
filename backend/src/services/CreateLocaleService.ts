import { getCustomRepository } from 'typeorm';
import LocaleRepository from '../repositories/LocaleRepository';
import Locale from '../models/Locale';

class CreateLocaleService {
  public async execute({ name, state, latitude, longitude }: LocaleProps): Promise<LocaleProps> {
    const localesRpository = getCustomRepository(LocaleRepository);

    if (!name || !state || !latitude || !longitude) {
      throw new Error('you must send all the datas name, state, latiude and longitude');
    }

    const locale = await localesRpository.createLocale({
      name,
      state,
      latitude,
      longitude
    });

    return locale;
  }
}

export default CreateLocaleService;