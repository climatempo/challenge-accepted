import { Injectable } from '@nestjs/common';
import { Locale } from '../../../domain/entities/Locale';
import { LocaleRepository } from '../../../domain/repositories/Locale.repository';

@Injectable()
export class ListLocales {
  constructor(private readonly localeRepository: LocaleRepository) {}

  async execute(): Promise<Locale[]> {
    const locales = await this.localeRepository.listAllLocales();

    return locales;
  }
}
