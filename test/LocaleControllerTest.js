process.env.NODE_ENV = "test"

const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../app")
const should = chai.should()

chai.use(chaiHttp)

describe("Teste de funcionalidades do LocaleController", () => {
    describe("[GET]: '/api/locales/cities?city=Taubaté' - LocaleController", () => {
        it("A API deve retornar um JSON de erro, pois a cidade solicitada não existe", done => {
            chai
                .request(app)
                .get("/api/locales/cities")
                .query({ city: "Taubaté" })
                .then(res => {
                    res.should.have.status(404)
                    res.should.be.a("object")
                    res.body.message.should.be.eql("Cidade não encontrada")
                })
                .catch(err => console.log(err))
            done()
        })
    })

    describe("[GET]: '/api/locales/cities?city=Osasco' - LocaleController", () => {
        it("A API deve retornar um JSON com a cidade encontrada", done => {
            chai
                .request(app)
                .get("/api/locales/cities")
                .query({ city: "Osasco" })
                .then(res => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.data.city.name.should.be.eql("Osasco")
                })
                .catch(err => console.log(err))
            done()
        })
    })

    describe("[GET]: '/api/locales/cities?city=null' - LocaleController", () => {
        it("A API deve retornar um JSON de erro, pois a cidade não foi informada", done => {
            Promise.all([
                chai.request(app).get("/api/locales/cities"),
                chai
                    .request(app)
                    .get("/api/locales/cities")
                    .query({ city: null }),
                chai
                    .request(app)
                    .get("/api/locales/cities")
                    .query({ city: 10 })
            ])
                .then(responses => {
                    responses.forEach(res => {
                        res.should.have.status(400)
                        res.should.be.a("object")
                        res.body.message.should.be.eql("Cidade não informada")
                    })
                })
                .catch(err => console.log(err))
            done()
        })
    })
})
