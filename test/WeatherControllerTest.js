const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../app")
const should = chai.should()

chai.use(chaiHttp)

describe("Teste de funcionalidade do WeatherController", () => {
    describe("[GET]: 'api/wheathers?city_id=1' - WeatherController", () => {
        it("A API deve retornar um JSON de erro, pois não existem informações climáticas para essa cidade", done => {
            chai
                .request(app)
                .get("/api/weathers")
                .query({ city_id: 1 })
                .then(res => {
                    res.should.have.status(404)
                    res.should.be.a("object")
                    res.body.message.should.be.eql(
                        "Informação climática não encontrada para essa cidade"
                    )
                })
                .catch(err => console.error(err.message))
            done()
        })
    })

    describe("[GET]: 'api/wheathers' - WeatherController", () => {
        it("A API deve retornar um JSON de erro, pois não foi informado o city_id", done => {
            chai
                .request(app)
                .get("/api/weathers")
                .then(res => {
                    res.should.have.status(400)
                    res.should.be.a("object")
                    res.body.message.should.be.eql("Cidade não informada")
                })
                .catch(err => console.error(err.message))
            done()
        })
    })

    describe("[GET]: 'api/weathers?city_id=3735' - WeatherController", () => {
        it("A API deve retornar um JSON com as informações meteorológicas encontradas", done => {
            chai
                .request(app)
                .get("/api/weathers")
                .query({ city_id: 3735 })
                .then(res => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.data.city.locale.id.should.be.eql(3735)
                })
                .catch(err => console.error(err.message))
            done()
        })
    })
})
