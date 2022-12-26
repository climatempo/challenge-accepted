import { Injectable, Inject } from '@nestjs/common';
import { ListResponse } from '../../../types';
import { Locale } from '../../entities/Locale';
import { ILocalesRepository } from '../../repositories/locales/locales.repository.interface';
import { CreateLocaleDTO, ListLocaleDTO } from './locales.dto';
import { ILocalesService } from './locales.service.interface';

@Injectable()
export class LocalesService implements ILocalesService {
  constructor(
    @Inject('ILocalesRepository')
    private readonly localesRepository: ILocalesRepository,
  ) {}

  async create(data: CreateLocaleDTO): Promise<Locale> {
    const locale = new Locale(data);
    return await this.localesRepository.create(locale);
  }

  async list(query: ListLocaleDTO): Promise<ListResponse<Locale>> {
    const { page, pageSize } = query;
    const { count, list } = await this.localesRepository.list(query);
    return { list, count, page, pageSize };
  }
}
