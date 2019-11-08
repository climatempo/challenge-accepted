const supertest = require("supertest");
const app = require("../server");
const request = supertest(app);

describe("Weather Endpoints", () => {
  it("should get weather", async done => {
    const weatherId = 3735;
    const res = await request
      .get(`/weather/${weatherId}/locale`)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(res.body[0].weather).not.toBeUndefined();
    done();
  });

  it("should not get any weather", async done => {
    const weatherId = 9128391230218301283
    const res = await request
      .get(`/weather/${weatherId}/locale`)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(res.body.length).toBe(0);
    done();
  });
});
