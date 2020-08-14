import App from "../../src/App";
import { ILocale } from "../../src/types";
import { makeCtx } from "../helpers";
const supertest = require("supertest");

const app = App;
const request = supertest;

describe("Location Integration tests", () => {
  beforeAll(() => {
    makeCtx({});
  });

  describe("GET /api/locale", () => {
    const endpoint = "/api/locale";

    test("Get all locations", done => {
      request(app)
        .get(`${endpoint}`)
        .end((error: Error, res: any) => {
          const locations: ILocale[] = res.body.data;

          expect(res.status).toEqual(200);

          expect(locations).toHaveLength(2);

          done();
        });
    });
  });
});
