import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherResolver } from './weather.resolver';

@Module({
  providers: [WeatherResolver, WeatherService]
})
export class WeatherModule { }
