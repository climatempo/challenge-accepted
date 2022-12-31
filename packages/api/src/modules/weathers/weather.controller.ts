import {
  Controller,
  Inject,
  Post,
  Get,
  Body,
  Query,
  UseInterceptors,
  CacheTTL,
  CacheInterceptor,
} from '@nestjs/common';
import { CreateWeatherDTO, ListWeatherDTO } from './weather.dto';
import { IWeatherService } from './weather.service.interface';

@Controller('weather')
export class WeatherController {
  constructor(
    @Inject('IWeatherService') private readonly weatherService: IWeatherService,
  ) {}

  @Post()
  async create(@Body() body: CreateWeatherDTO) {
    return this.weatherService.create(body);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(Number(process.env.CACHE_DURATION_SECONDS) || 60)
  @Get()
  async list(@Query() query: ListWeatherDTO) {
    return this.weatherService.listByLocale(query);
  }
}
