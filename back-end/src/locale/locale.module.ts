import { Module } from '@nestjs/common';
import { LocaleService } from './locale.service';
import { LocaleResolver } from './locale.resolver';

@Module({
  providers: [LocaleResolver, LocaleService]
})
export class LocaleModule {}
