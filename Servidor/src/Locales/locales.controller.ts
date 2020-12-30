import {
  Controller,
  Get,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { LocalesService } from './locales.service';

@Controller('locales')
export class LocalesController {
  constructor(private readonly localesService: LocalesService) { }

  @Get('/all')
  public async getAllLocales() {
    try {
      return this.localesService.getAllLocales();
    } catch (error) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST);
    }
  }
}
