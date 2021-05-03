import { getCustomRepository } from 'typeorm';
import LocaleRepository from '../repositories/LocaleRepository';
import Locale from '../models/Locale';

class GetAllLocales {
  public async execute(): Promise<LocaleProps[]> {
    const localesRpository = getCustomRepository(LocaleRepository);

    const locales = await localesRpository.find();

    return locales;
  }
}

export default GetAllLocales;