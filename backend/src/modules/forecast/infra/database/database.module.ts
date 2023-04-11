import { Module } from '@nestjs/common';
import { ForecastRepository } from '../../domain/repositories/Forecast.repository';
import { LocaleRepository } from '../../domain/repositories/Locale.repository';
import { ElasticService } from './elastic/elastic.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaForecastRepository } from './prisma/repositories/prisma-forecast.repository';
import { PrismaLocaleRepository } from './prisma/repositories/prisma-locale.repository';

@Module({
  providers: [
    PrismaService,
    ElasticService,
    {
      provide: ForecastRepository,
      useClass: PrismaForecastRepository,
    },
    {
      provide: LocaleRepository,
      useClass: PrismaLocaleRepository,
    },
  ],
  exports: [ForecastRepository, LocaleRepository],
})
export class DatabaseModule {}
