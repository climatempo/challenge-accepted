import { Inject } from '@nestjs/common';
import { Weather } from '../../../entities/Weather';
import { Weather as WeatherRepository } from '@prisma/client';
import { PrismaService } from '../../../providers/db/prisma.service';
import {
  IWeatherRepository,
  ListWeatherParams,
} from '../weather.repository.interface';

export class PrismaWeatherRepository implements IWeatherRepository {
  constructor(@Inject('PrismaService') private prismaService: PrismaService) {}
  async create(payload: Weather): Promise<WeatherRepository> {
    return this.prismaService.weather.create({ data: payload });
  }

  async list({
    orderBy,
    page,
    pageSize,
    params: where,
  }: ListWeatherParams): Promise<WeatherRepository[]> {
    return this.prismaService.weather.findMany({
      where,
      orderBy,
      take: pageSize,
      ...(pageSize && page ? { skip: (page - 1) * pageSize } : {}),
    });
  }

  async count(where: Partial<Weather>): Promise<number> {
    return this.prismaService.weather.count({
      where,
    });
  }
}
