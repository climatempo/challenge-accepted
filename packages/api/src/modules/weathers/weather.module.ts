import { Module } from '@nestjs/common';
import { RepositoryModule } from '../../repositories/repository.module';
import { WeatherController } from './weather.controller';
import { weatherService } from './weather.service';

@Module({
  imports: [RepositoryModule],
  providers: [{ provide: 'IWeatherService', useClass: weatherService }],
  controllers: [WeatherController],
})
export class WeatherModule {}
