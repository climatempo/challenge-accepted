import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Classe responsável pelas execessões customisadas
 */
export class NotFoundException extends HttpException {
  constructor(err, message) {
    super(
      { message: 'Localidade não encontrada', cause: err },
      HttpStatus.NOT_FOUND
    );
  }
}
