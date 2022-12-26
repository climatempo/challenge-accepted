import { Module } from '@nestjs/common';
import { LocalesService } from './locales.service';
import { LocalesController } from './locales.controller';
import { RepositoryModule } from '../../repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [{ provide: 'ILocalesService', useClass: LocalesService }],
  controllers: [LocalesController],
})
export class LocalesModule {}
