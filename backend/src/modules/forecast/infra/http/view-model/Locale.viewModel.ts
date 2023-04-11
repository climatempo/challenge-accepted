import { Locale } from '../../../domain/entities/Locale';

export class LocaleViewModel {
  static toHTTP(locale: Locale) {
    return {
      id: locale.id.value,
      name: locale.name.value,
      state: locale.state.value,
      latitude: locale.latitude?.value,
      longitude: locale.longitude?.value,
    };
  }
}
