import { Transform, Type } from 'class-transformer';
import { IsInt, IsObject, IsOptional, IsPositive, Max } from 'class-validator';
import { OrderParam } from '../../../types';
import { orderByFromString } from './orderByFromString';

export class PaginationAndSortDTO<T> {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  public page = 1;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(1000)
  @Type(() => Number)
  public pageSize = 100;

  @IsOptional()
  @IsObject({
    message:
      'orderBy must have the following format: key_direction(asc or desc)',
  })
  @Transform((value) => orderByFromString<T>(value.value))
  orderBy: OrderParam<T>;
}
