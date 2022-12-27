import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalesModule } from './modules/locales/locales.module';
import { WeatherModule } from './modules/weathers/weather.module';

@Module({
  imports: [LocalesModule, WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
