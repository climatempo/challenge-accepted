import { IsString, MaxLength, IsInt, IsDecimal } from 'class-validator';

/**
 * Classe responsável por manter os dados de local para uso como DTO
 */
export class LocaleDto {
  @IsInt()
  id: Int16Array;

  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(2)
  state: string;

  @IsDecimal()
  latitude: Float32Array;

  @IsDecimal()
  longitude: Float32Array;

  /**
   * Função responsável por popular o DTO com os dados informados
   * @param condition
   */
  public populateDto(locale: any): this {
    if (!locale) {
      return null;
    }

    this.id = locale.id;
    this.latitude = locale.latitude;
    this.longitude = locale.longitude;
    this.name = locale.name;
    this.state = locale.state;

    return this;
  }
}
