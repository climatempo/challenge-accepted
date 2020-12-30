import { Module } from '@nestjs/common'
import { LocalesService } from './locales.service'
import { LocalesController } from './locales.controller'

@Module({
  controllers: [LocalesController],
  providers: [LocalesService],
})
export class LocalesModule { }
