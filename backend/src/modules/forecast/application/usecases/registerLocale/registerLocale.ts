import { Inject, Injectable } from '@nestjs/common';
import { Locale } from '../../../domain/entities/Locale';
import { LocaleRepository } from '../../../domain/repositories/Locale.repository';
import { Latitude } from '../../../domain/valueObject/Latitude';
import { LocaleId } from '../../../domain/valueObject/LocaleId';
import { LocaleName } from '../../../domain/valueObject/LocaleName';
import { Longitude } from '../../../domain/valueObject/Longitude';
import { State, StateType } from '../../../domain/valueObject/State';

interface RegisterLocaleDTO {
  id: number;
  name: string;
  state: string;
  latitude?: number;
  longitude?: number;
}

@Injectable()
export class RegisterLocale {
  constructor(
    @Inject()
    private readonly localeRepository: LocaleRepository,
  ) {}

  async execute(dto: RegisterLocaleDTO): Promise<void> {
    const localeId = new LocaleId(dto.id);

    const alreadyExists = await this.localeRepository.getLocaleById(localeId);
    if (alreadyExists) {
      throw new Error('locale alreadyExists');
    }

    const latitude = dto?.latitude ? new Latitude(dto.latitude) : undefined;
    const longitude = dto?.longitude ? new Longitude(dto.longitude) : undefined;

    console.log({ latitude, longitude });

    const locale = new Locale({
      id: new LocaleId(dto.id),
      name: new LocaleName(dto.name),
      state: new State(dto.state as StateType),
      latitude,
      longitude,
    });

    await this.localeRepository.registerLocale(locale);
  }
}
