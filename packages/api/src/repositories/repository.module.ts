import { Module } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.service';
import { ElasticModule } from '../providers/elastic/elastic.module';
import { ElasticService } from '../providers/elastic/elastic.service';
import { ElasticLocalesRepository } from './locales/implementations/search.locales.repository';
import { PrismaWeatherRepository } from './weather/implementations/prisma.weather.repository';

@Module({
  imports: [ElasticModule],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'ElasticService',
      useClass: ElasticService,
    },
    {
      provide: 'ILocalesRepository',
      useClass: ElasticLocalesRepository,
    },
    {
      provide: 'IWeatherRepository',
      useClass: PrismaWeatherRepository,
    },
  ],
  exports: [
    'PrismaService',
    'ElasticService',
    'ILocalesRepository',
    'IWeatherRepository',
  ],
})
export class RepositoryModule {}
