import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator';
import { Weather } from '../../entities/Weather';
import { PaginationAndSortDTO } from '../../utils/dto/global.dto';

export class CreateWeatherDTO {
  @IsString()
  @IsNotEmpty()
  locale: string;

  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  temperatureMin: number;

  @IsNumber()
  temperatureMax: number;

  @IsNumber()
  probability: number;

  @IsNumber()
  precipitation: number;
}

export class ListWeatherDTO extends PaginationAndSortDTO<Weather> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  locale: string;

  @IsDate()
  @IsOptional()
  begins?: Date;

  @IsDate()
  @IsOptional()
  ends?: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  text?: string;

  @IsNumber()
  @IsOptional()
  temperatureMin?: number;

  @IsNumber()
  @IsOptional()
  temperatureMax?: number;

  @IsNumber()
  @IsOptional()
  probability?: number;

  @IsNumber()
  @IsOptional()
  precipitation?: number;
}
