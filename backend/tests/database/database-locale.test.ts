import { IContext } from "../../src/Context";
import { makeCtx } from "../helpers";
import { mockLocale } from "../mock/localeMock";

let ctx: IContext;

describe("Database tests", () => {
  beforeAll(() => {
    ctx = makeCtx({});
  });

  beforeEach(async () => {
    await ctx.db.weathers.delete({});
    await ctx.db.locales.delete({});
  });

  describe("Locale", () => {
    test("Should create a locale", async done => {
      const locale = mockLocale();

      const createdLocale = await ctx.db.locales.save(locale);

      expect(locale.identification).toEqual(createdLocale.identification);
      expect(locale.latitude).toEqual(createdLocale.latitude);
      expect(locale.longitude).toEqual(createdLocale.longitude);
      expect(locale.name).toEqual(createdLocale.name);
      expect(locale.state).toEqual(createdLocale.state);

      done();
    });
  });
});
