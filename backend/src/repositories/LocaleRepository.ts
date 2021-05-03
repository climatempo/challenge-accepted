import { EntityRepository, Repository } from 'typeorm';
import Locale from '../models/Locale';

@EntityRepository(Locale)
class LocaleRepository extends Repository<Locale> {
  public async createLocale({ name, state, latitude, longitude }: LocaleProps) {
    const locale = await this.create({
      name,
      state,
      latitude,
      longitude,
    });

    await this.save(locale);

    return locale;
  }
}

export default LocaleRepository;