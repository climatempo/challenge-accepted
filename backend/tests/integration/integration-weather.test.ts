import App from "../../src/App";
import { ILocale } from "../../src/types";
import { makeCtx } from "../helpers";
const supertest = require("supertest");

const app = App;
const request = supertest;

describe("Weather Integration tests", () => {
  beforeAll(() => {
    makeCtx({});
  });

  describe("GET /api/weather/:cityName", () => {
    const endpoint = "/api/weather/";

    test("Get weather from São Paulo", done => {
      const city = "São Paulo";

      request(app)
        .get(`${endpoint}${city}`)
        .end((error: Error, res: any) => {
          const locations: ILocale[] = res.body.data;

          expect(res.status).toEqual(200);

          expect(locations).toHaveLength(7);

          done();
        });
    });

    test("Get weather from Osasco", done => {
      const city = "Osasco";

      request(app)
        .get(`${endpoint}${city}`)
        .end((error: Error, res: any) => {
          const locations: ILocale[] = res.body.data;

          expect(res.status).toEqual(200);

          expect(locations).toHaveLength(7);

          done();
        });
    });
  });
});
