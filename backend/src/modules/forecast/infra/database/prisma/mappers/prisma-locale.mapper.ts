import { Locale } from '../../../../domain/entities/Locale';
import { LocaleId } from '../../../../domain/valueObject/LocaleId';
import { LocaleName } from '../../../../domain/valueObject/LocaleName';
import { State, StateType } from '../../../../domain/valueObject/State';
import { Latitude } from './../../../../domain/valueObject/Latitude';
import { Longitude } from './../../../../domain/valueObject/Longitude';

import { locale as RawLocale } from '@prisma/client';

export class PrismaLocaleMapper {
  static toPrisma(locale: Locale): RawLocale {
    const latitude =
      locale.latitude?.value !== undefined ? locale.latitude?.value : null;
    const longitude =
      locale.longitude?.value !== undefined ? locale.longitude?.value : null;

    return {
      id: locale.id.value,
      name: locale.name.value,
      state: locale.state.value,
      latitude,
      longitude,
    };
  }

  static toDomain(raw: RawLocale): Locale {
    const latitude = raw.latitude ? new Latitude(raw.latitude) : undefined;
    const longitude = raw.longitude ? new Longitude(raw.longitude) : undefined;

    return new Locale({
      id: new LocaleId(raw.id),
      name: new LocaleName(raw.name),
      state: new State(raw.state as StateType),
      latitude,
      longitude,
    });
  }
}
