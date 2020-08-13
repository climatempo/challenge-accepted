import { IContext } from "../../src/Context";
import { makeCtx } from "../helpers";
import { mockLocale } from "../mock/localeMock";
import { mockWeather } from "../mock/weatherMock";

let ctx: IContext;

describe("Database tests", () => {
  beforeAll(() => {
    ctx = makeCtx({});
  });

  beforeEach(async () => {
    await ctx.db.weathers.delete({});
    await ctx.db.locales.delete({});
  });

  describe("Weather", () => {
    test("Should create a weather", async done => {
      const createdLocale = await ctx.db.locales.save(mockLocale());

      const weather = mockWeather(createdLocale.id);

      const createdWeather = await ctx.db.weathers.save(weather);

      expect(weather.date).toEqual(createdWeather.date);
      expect(weather.localeId).toEqual(createdWeather.localeId);
      expect(weather.rainPrecipitation).toEqual(createdWeather.rainPrecipitation);
      expect(weather.rainProbability).toEqual(createdWeather.rainProbability);
      expect(weather.temperatureMax).toEqual(createdWeather.temperatureMax);
      expect(weather.temperatureMin).toEqual(createdWeather.temperatureMin);
      expect(weather.text).toEqual(createdWeather.text);

      done();
    });
  });
});
