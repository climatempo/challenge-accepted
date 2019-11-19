import { Module } from '@nestjs/common';
import { SearchWeatherController } from './controllers/sw.controller';
import { AppService } from './services/sw.service';
import { LocaleRepository } from './repositories/locale.repository';
import { WeatherRepository } from './repositories/weather.repository';
/**
 * Responsável por assinar todos os módulos e seus provides 'services, repository', no momento o projeto somente tem o módulo de pesquisas
 */
@Module({
  imports: [],
  controllers: [SearchWeatherController],
  providers: [AppService, LocaleRepository, WeatherRepository],
})
export class AppModule {}
