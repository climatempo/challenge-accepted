import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LocaleDto } from '../dtos/locale.dto';

/**
 * MOCK de dados do local providos pelo teste
 */
const MOCK_DATA = [
  {
    id: 3735,
    name: 'Osasco',
    state: 'SP',
    latitude: -23.532,
    longitude: -46.792,
  },
  {
    id: 3477,
    name: 'São Paulo',
    state: 'SP',
    latitude: -23.548,
    longitude: -46.636,
  },
];

/**
 * Classe responsável por interagir com a base de dados
 */
@Injectable()
export class LocaleRepository {
  /**
   * Recupera o local pelo nome e encapsula o resultado em seu DTO
   *
   * @param name
   * @returns LocaleDto
   */
  public getLocaleByName(name: string): LocaleDto {
    const dto = new LocaleDto();
    let localePopulate: LocaleDto;

    MOCK_DATA.every(locale => {
      localePopulate = dto.populateDto(locale);
      if (localePopulate.name.toLowerCase().search(name) === 0) {
        return false;
      } else {
        localePopulate = null;
        return true;
      }
    });

    return localePopulate;
  }
}
