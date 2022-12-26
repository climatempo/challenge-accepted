import { Injectable, Inject } from '@nestjs/common';
import { ListRepositoryResponse } from '../../../../types';
import { Locale } from '../../../entities/Locale';
import { ElasticService } from '../../../providers/elastic/elastic.service';
import {
  ILocalesRepository,
  ListLocalesParams,
} from '../locales.repository.interface';

@Injectable()
export class ElasticLocalesRepository implements ILocalesRepository {
  constructor(
    @Inject('ElasticService') private elasticService: ElasticService,
  ) {}
  async list({
    name,
    page,
    pageLimit,
    orderBy,
  }: ListLocalesParams): Promise<ListRepositoryResponse<Locale>> {
    const { results, total } = await this.elasticService.search('locales', {
      ...(name ? { query: { match: { name } } } : {}),
      page,
      pageLimit,
      orderBy,
    });
    return { list: results as Locale[], count: total as number };
  }

  async create({ id, ...data }: Locale): Promise<Locale> {
    const { _id } = await this.elasticService.create('locales', id, data);
    return { ...data, id: _id };
  }
}
