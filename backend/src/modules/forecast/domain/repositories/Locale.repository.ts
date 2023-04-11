import { Locale } from '../entities/Locale';
import { LocaleId } from '../valueObject/LocaleId';

export abstract class LocaleRepository {
  abstract registerLocale(locale: Locale): Promise<void>;

  abstract listAllLocales(): Promise<Locale[]>;
  abstract getLocaleById(localeId: LocaleId): Promise<Locale | null>;

  abstract search(query: string): Promise<Locale[]>;
}
