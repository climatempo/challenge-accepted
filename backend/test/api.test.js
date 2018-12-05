const request = require("supertest");
const app = require("../src/server");

test('Deve retornar os dados sobre "Osasco"', done => {
  request(app)
    .get("/api/v1/locale?name=osasco")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(res => {
      if (res.body) {
        if (Object.keys(res.body).length === 0) throw new Error("Missing data");
      } else {
        throw new Error("Missing data");
      }
    })
    .end(done);
});

test('Deve retornar os dados sobre "São Paulo"', done => {
  request(app)
    .get(`/api/v1/locale?name=${encodeURI("são paulo")}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(res => {
      if (res.body) {
        if (Object.keys(res.body).length === 0) throw new Error("Missing data");
      } else {
        throw new Error("Missing data");
      }
    })
    .end(done);
});

test('Não deve retornar dados sobre "asdasdasd"', done => {
  request(app)
    .get(`/api/v1/locale?name=asdasdasd}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(res => {
      if (res.body) {
        if (Object.keys(res.body).length !== 0) throw new Error("Missing data");
      } else {
        throw new Error("Missing data");
      }
    })
    .end(done);
});

test('Deve retornar os dados sobre o id "3735"', done => {
  request(app)
    .get(`/api/v1/weather?id=3735`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(res => {
      if (res.body) {
        if (Object.keys(res.body).length === 0) throw new Error("Missing data");
      } else {
        throw new Error("Missing data");
      }
    })
    .end(done);
});

test('Não deve retornar os dados sobre o id "11111111"', done => {
  request(app)
    .get(`/api/v1/weather?id=11111111`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(res => {
      if (res.body) {
        if (Object.keys(res.body).length !== 0) throw new Error("Missing data");
      } else {
        throw new Error("Missing data");
      }
    })
    .end(done);
});

test('Não deve retornar os dados sobre o id "asdasd"', done => {
  request(app)
    .get(`/api/v1/weather?id=asdasd`)
    .expect(400)
    .end(done);
});
