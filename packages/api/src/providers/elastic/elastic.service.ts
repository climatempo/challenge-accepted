import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch/dist';
import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';
import { OrderBy, OrderParam } from '../../../types';

@Injectable()
export class ElasticService {
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
      orderBy?: OrderParam<any>;
    },
  ) {
    const results = [];
    const response = await this.esService.search({
      index,
      body: {
        ...(query ? { query } : {}),
        ...(pageLimit ? { size: pageLimit, from: (page - 1) * pageLimit } : {}),
        ...(orderBy ? { sort: orderBy } : {}),
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.push(item._source);
    });

    return { results: results, total: response.hits.total };
  }

  async create(index: string, id: string, body: any) {
    const { _id } = await this.esService.index(
      { index: 'teste', id, body },
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
