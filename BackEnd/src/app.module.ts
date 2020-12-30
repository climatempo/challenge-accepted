import { Module } from '@nestjs/common';
import { LocalesModule } from './Locales/locales.module';
import { WeatherModule } from './Weather/weather.module';

@Module({
  imports: [LocalesModule, WeatherModule],
})
export class AppModule { }
