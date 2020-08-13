/* eslint-disable @typescript-eslint/camelcase */
import * as faker from "faker";
import { Locale } from "../../src/models";

export function mockLocale(): Locale {
  return {
    id: faker.random.uuid(),
    identification: faker.random.number(),
    latitude: faker.random.number(),
    longitude: faker.random.number(),
    name: faker.address.city(),
    state: faker.address.state(),
  };
}
