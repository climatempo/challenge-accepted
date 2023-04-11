import { Injectable } from '@nestjs/common';
import { Locale } from '../../../../domain/entities/Locale';
import { LocaleRepository } from '../../../../domain/repositories/Locale.repository';
import { LocaleId } from '../../../../domain/valueObject/LocaleId';
import { ElasticService } from '../../elastic/elastic.service';
import { PrismaLocaleMapper } from '../mappers/prisma-locale.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaLocaleRepository implements LocaleRepository {
  constructor(private prisma: PrismaService, private elastic: ElasticService) {}

  async search(query: string): Promise<Locale[]> {
    const elasticResult = await this.elastic.search({
      index: 'locales',
      body: {
        query: {
          bool: {
            should: [
              {
                match_phrase_prefix: {
                  name: {
                    query: query,
                    max_expansions: 10,
                  },
                },
              },
              {
                match: {
                  name: {
                    query: query,
                    fuzziness: 'AUTO',
                  },
                },
              },
            ],
          },
        },
      },
    });

    const rawLocales = elasticResult.hits.hits.map((hit) => hit._source);

    return rawLocales.map((locale) =>
      PrismaLocaleMapper.toDomain(locale as any),
    );
  }

  async registerLocale(locale: Locale): Promise<void> {
    const raw = PrismaLocaleMapper.toPrisma(locale);
    await this.prisma.locale.create({
      data: raw,
    });

    await this.elastic.index({
      index: 'locales',
      type: '_doc',
      body: raw,
    });
  }

  async listAllLocales(): Promise<Locale[]> {
    const raw = await this.prisma.locale.findMany();
    return raw.map((locale) => PrismaLocaleMapper.toDomain(locale));
  }

  async getLocaleById(localeId: LocaleId): Promise<Locale | null> {
    const raw = await this.prisma.locale.findUnique({
      where: {
        id: localeId.value,
      },
    });

    if (!raw) {
      return null;
    }

    return PrismaLocaleMapper.toDomain(raw);
  }
}
