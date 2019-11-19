import { Injectable } from '@nestjs/common';
import { LocaleDto } from '../dtos/locale.dto';
import { SearchLocaleDto } from '../dtos/searchLocale.dto';
import { SearchConditionDto } from '../dtos/searchCondition.dto';
import { ConditionDto } from '../dtos/condition.dto';
import { LocaleRepository } from '../repositories/locale.repository';
import { WeatherRepository } from '../repositories/weather.repository';
import { NotFoundException } from '../exceptions/notFound.exception';

/**
 * Classes de serviço são responsável pela regra de negócio do módulo
 */
@Injectable()
export class AppService {
  constructor(
    private readonly localeRepository: LocaleRepository,
    private readonly weatherRepository: WeatherRepository
  ) {}

  /**
   * Função responsável por processar as regras de negócio e comunicar com o repositório de dados
   *
   * @param dto //dados do usuário encapsulado e já validados
   * @returns LocaleDto //retorna um Data Transport Object contendo a resposta da pesquisa
   */
  public getWeatherLocation(dto: SearchLocaleDto): LocaleDto {
    let localeFound: LocaleDto;
    localeFound = this.localeRepository.getLocaleByName(
      dto.location.toLowerCase()
    );
    if (!localeFound) {
      throw new NotFoundException({}, 'A busca não encontrou um resultado');
    }

    return localeFound;
  }

  /**
   * Função responsável por processar as regras de negócio e comunicar com o repositório de dados
   *
   * @param dto //dados do usuário encapsulado e já validados
   * @returns ConditionDto //retorna um Data Transport Object contendo a resposta da pesquisa
   */
  public getConditionByLocale(dto: SearchConditionDto): ConditionDto {
    let conditionFound: ConditionDto;
    conditionFound = this.weatherRepository.getConditionByLocaleId(
      parseInt(dto.id)
    );
    if (!conditionFound) {
      throw new NotFoundException(
        { id: dto.id },
        'A busca não encontrou um resultado'
      );
    }

    return conditionFound;
  }
}
