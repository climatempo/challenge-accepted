import App from "../../src/App";
import { IContext } from "../../src/Context";
import { ILocale } from "../../src/types";
import { makeCtx } from "../helpers";
const supertest = require("supertest");

const app = App;
const request = supertest;

let ctx: IContext;

describe("Location Integration tests", () => {
  beforeAll(() => {
    ctx = makeCtx({});
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
