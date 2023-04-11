import { Module } from '@nestjs/common';
import { GenerateForecast } from '../../application/usecases/generateForecast/generateForecast';
import { GetForecast } from '../../application/usecases/getForecast/getForecast';
import { ListLocales } from '../../application/usecases/listLocales/listLocales';
import { SearchLocales } from '../../application/usecases/searchLocale/searchLocale';
import { DatabaseModule } from '../database/database.module';
import { ForecastController } from './controllers/Forecast.controller';
import { LocaleController } from './controllers/Locale.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ForecastController, LocaleController],
  providers: [ListLocales, GetForecast, GenerateForecast, SearchLocales],
})
export class HttpModule {}
