import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { Locale } from '../../entities/Locale';
import { PaginationAndSortDTO } from '../../utils/dto/global.dto';

export class ListLocaleDTO extends PaginationAndSortDTO<Locale> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
}

export class CreateLocaleDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
