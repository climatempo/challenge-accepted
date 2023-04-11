import { Injectable } from '@nestjs/common';
import { Locale } from '../../../domain/entities/Locale';
import { LocaleRepository } from '../../../domain/repositories/Locale.repository';

@Injectable()
export class SearchLocales {
  constructor(private readonly localeRepository: LocaleRepository) {}

  async execute(searchText: string): Promise<Locale[]> {
    const locales = await this.localeRepository.search(searchText);
    return locales;
  }
}
