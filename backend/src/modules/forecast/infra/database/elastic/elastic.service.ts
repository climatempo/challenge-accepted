import { Injectable } from '@nestjs/common';
import { Client } from 'elasticsearch';

@Injectable()
export class ElasticService extends Client {
  constructor() {
    super({
      host: process.env.ELASTICSEARCH_URL,
    });
  }
}
