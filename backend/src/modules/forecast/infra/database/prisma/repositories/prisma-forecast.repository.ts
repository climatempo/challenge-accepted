import { Injectable } from '@nestjs/common';
import { Forecast } from '../../../../domain/entities/Forecast';
import { ForecastRepository } from '../../../../domain/repositories/Forecast.repository';
import { LocaleId } from '../../../../domain/valueObject/LocaleId';
import { PrismaForecastMapper } from '../mappers/prisma-forecast.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaForecastRepository implements ForecastRepository {
  constructor(private prisma: PrismaService) {}

  async registerForecast(forecast: Forecast): Promise<void> {
    const raw = PrismaForecastMapper.toPrisma(forecast);

    await this.prisma.forecast.create({
      data: {
        locale: {
          connect: {
            id: raw.localeId,
          },
        },
        weather: {
          create: raw.weather,
        },
        period_begin: raw.period_begin,
        period_end: raw.period_end,
      },
    });
  }

  async getForecastByLocaleID(LocaleID: LocaleId): Promise<Forecast | null> {
    const raw = await this.prisma.forecast.findMany({
      where: {
        localeId: LocaleID.value,
      },
      include: {
        weather: true,
        locale: true,
      },
    });

    if (raw.length == 0) return null;

    const latesForecast = raw.sort((a, b) => {
      return a.period_begin > b.period_begin ? -1 : 1;
    })[0];

    return PrismaForecastMapper.toDomain(latesForecast);
  }
}
