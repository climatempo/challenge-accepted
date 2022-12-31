import { Controller, Inject, Post, Get, Body, Query } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/common/cache';
import { UseInterceptors } from '@nestjs/common/decorators';
import { CreateLocaleDTO, ListLocaleDTO } from './locales.dto';
import { ILocalesService } from './locales.service.interface';

@Controller('locales')
export class LocalesController {
  constructor(
    @Inject('ILocalesService') private readonly localesService: ILocalesService,
  ) {}

  @Post()
  async create(@Body() body: CreateLocaleDTO) {
    return this.localesService.create(body);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(Number(process.env.CACHE_DURATION_SECONDS) || 60)
  @Get()
  async list(@Query() query: ListLocaleDTO) {
    return this.localesService.list(query);
  }
}
