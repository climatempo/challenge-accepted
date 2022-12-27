import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch/dist';
import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';
import { OrderParam } from '../../../types';

@Injectable()
export class ElasticService<T = any> {
  constructor(private readonly esService: ElasticsearchService) {}

  async search(
    index: string,
    {
      query,
      page = 1,
      pageLimit,
      orderBy,
    }: {
      query?: QueryDslQueryContainer;
      page?: number;
      pageLimit?: number;
      orderBy?: OrderParam<T>;
    },
  ) {
    return await this.esService.search<T>({
      index,
      body: {
        ...(query ? { query } : {}),
        ...(pageLimit ? { size: pageLimit, from: (page - 1) * pageLimit } : {}),
        ...(orderBy ? { sort: orderBy } : {}),
      },
    });
  }

  async create(index: string, { id, ...body }: T & { id: string }) {
    const { _id } = await this.esService.index(
      { index, id, body },
      {
        headers: {
          'content-type': 'application/json',
          accept: 'application/vnd.elasticsearch+json',
        },
      },
    );
    return { _id };
  }
}
