import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CacheInterceptor, CacheModule } from '@nestjs/common/cache';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalesModule } from './modules/locales/locales.module';
import { WeatherModule } from './modules/weathers/weather.module';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule,
    LocalesModule,
    WeatherModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore as any,
      host: process.env.CACHE_REDIS_HOST || 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class AppModule {}
