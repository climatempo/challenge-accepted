import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule { }
