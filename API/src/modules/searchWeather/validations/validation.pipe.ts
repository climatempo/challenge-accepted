import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

/**
 * Responsável por validar os DTOs do projeto, principalmente os DTOs de pesquisa que recebe informações externas da API
 */
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  /**
   * A função faz uma espécie de reflexão nos dados informados e valida com a lib class-validator
   *
   * @param value
   * @param param1
   */
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Os dados informados não são aceitos!',
        object
      );
    }
    return value;
  }

  /**
   * Verifica se os tipos dos dados informados estão de acordo com a assinatura do DTO
   *
   * @param metatype
   */
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
