import {
  Controller,
  Post,
  Body,
  UsePipes,
  HttpStatus,
  Res,
  Get,
  Param,
} from '@nestjs/common';
import { Response } from 'express';

import { AppService } from '../Services/sw.service';
import { SearchLocaleDto } from '../dtos/searchLocale.dto';
import { SearchConditionDto } from '../dtos/searchCondition.dto';
import { ValidationPipe } from '../validations/validation.pipe';

/**
 * Controlador do módulo searchWeather
 */
@Controller('weather')
export class SearchWeatherController {
  constructor(private readonly appService: AppService) {}

  /**
   * Rota responsável por procurar o local pelo nome
   *
   * @param searchLocaleDto //Dto responsável por encpsular e validar dados do usuário
   * @param res //encapsulamento do response
   */
  @Post('location')
  @UsePipes(new ValidationPipe())
  getWeatherLocation(
    @Body()
    searchLocaleDto: SearchLocaleDto,
    @Res() res: Response
  ): any {
    return res
      .status(HttpStatus.OK)
      .json(this.appService.getWeatherLocation(searchLocaleDto));
  }

  /**
   * Rota responsável por recuperar a condição meteriológica pelo id do local informado
   *
   * @param searchLocaleDto //Dto responsável por encpsular e validar dados do usuário
   * @param res //encapsulamento do response
   */
  @Get('condition/:id')
  @UsePipes(new ValidationPipe())
  getWeatherCondition(
    @Param()
    searchConditionDto: SearchConditionDto,
    @Res() res: Response
  ): any {
    return res
      .status(HttpStatus.OK)
      .json(this.appService.getConditionByLocale(searchConditionDto));
  }
}
