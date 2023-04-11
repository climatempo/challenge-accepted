import { promises } from 'node:fs';
import { RegisterLocale } from '../src/modules/forecast/application/usecases/registerLocale/registerLocale';
import { LocaleRepository } from '../src/modules/forecast/domain/repositories/Locale.repository';
import { ElasticService } from '../src/modules/forecast/infra/database/elastic/elastic.service';
import { PrismaService } from '../src/modules/forecast/infra/database/prisma/prisma.service';
import { PrismaLocaleRepository } from '../src/modules/forecast/infra/database/prisma/repositories/prisma-locale.repository';

interface RawLocale {
  id: number;
  name: string;
  state: string;
  latitude?: number;
  longitude?: number;
}

async function readJsonFile(filename: string): Promise<RawLocale[]> {
  const rawdata = await promises.readFile(filename);
  const data = JSON.parse(rawdata.toString());
  return data;
}

async function seed(): Promise<void> {
  const prisma = new PrismaService();
  const elastic = new ElasticService();

  const data = await readJsonFile('./prisma/locales.json');

  const localeRepository: LocaleRepository = new PrismaLocaleRepository(
    prisma,
    elastic,
  );

  const registerService = new RegisterLocale(localeRepository);

  for (const item of data) {
    console.log(item);
    await registerService.execute({
      id: item.id,
      name: item.name,
      state: item.state,
      latitude: item?.latitude,
      longitude: item?.longitude,
    });
  }
}

seed();
