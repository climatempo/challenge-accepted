import { Module } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.service';
import { ElasticModule } from '../providers/elastic/elastic.module';
import { ElasticService } from '../providers/elastic/elastic.service';
import { ElasticLocalesRepository } from './locales/implementations/search.locales.repository';

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
  ],
  exports: ['PrismaService', 'ElasticService', 'ILocalesRepository'],
})
export class RepositoryModule {}
