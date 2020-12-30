import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param
} from '@nestjs/common'
import { WeatherService } from './weather.service'

@Controller('weathers')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) { }

  @Get('/all')
  public async getAllWeather() {
    try {
      return this.weatherService.getAllWeather()
    } catch (error) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST)
    }
  }

  @Get('/:id')
  public async getWeatherById(@Param('id') id: number) {
    try {
      return this.weatherService.getWeatherById(id)
    } catch (error) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST)
    }
  }
}
