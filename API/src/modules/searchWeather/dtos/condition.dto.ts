import { IsObject, IsArray, ValidateNested } from 'class-validator';
import { LocaleDto } from '../dtos/locale.dto';

/**
 * Classe responsável por manter os dados de condição meteriológica para uso como DTO
 */
export class ConditionDto {
  @IsObject()
  period: object;

  @ValidateNested()
  locale: LocaleDto;

  @IsArray()
  weather: [];

  /**
   * Função responsável por popular o DTO com os dados informados
   * @param condition
   */
  public populateDto(condition: any): this {
    if (!condition) {
      return null;
    }

    this.period = condition.period;
    this.locale = condition.locale;
    this.weather = condition.weather;

    return this;
  }
}
