import { Module } from '@nestjs/common';

import { LocaleController } from './controllers/locale.controller';
import { WeatherController } from './controllers/weather.controller';
import { LocaleService } from './services/locale.service';
import { WeatherService } from './services/weather.service';

@Module({
    imports: [],
    controllers: [LocaleController, WeatherController],
    providers: [LocaleService, WeatherService],
})
export class AppModule {}
