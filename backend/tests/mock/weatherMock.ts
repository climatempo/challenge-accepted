/* eslint-disable @typescript-eslint/camelcase */
import * as faker from "faker";
import { Weather } from "../../src/models";

export function mockWeather(localeId: string): Weather {
  return {
    date: new Date(),
    id: faker.random.uuid(),
    localeId,
    rainPrecipitation: faker.random.number(),
    rainProbability: faker.random.number(),
    temperatureMax: faker.random.number(),
    temperatureMin: faker.random.number(),
    text: faker.random.words(),
  };
}
