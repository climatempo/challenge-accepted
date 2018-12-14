describe('Rota -> Previsoes', () => {
    let request = supertest(setupApp());

    describe('/GET weathers', () => {
        it('deve retornar uma lista de previsoes', done => {
            request
                .get('/weathers')
                .expect(res => {
                    if (res.body) {
                        if (Object.keys(res.body).length === 0)
                            throw new Error("Resultado nao e uma lista");
                    }
                    else
                        throw new Error("Erro");
                })
                .expect(200)
                .end(done);
        });

        context('quando passado nome Osasco', done => {
            it('deve retornar previsoes da cidade de Osasco', done => {
                request
                    .get('/weathers/osasco')
                    .expect(res => {
                        if (res.body) {
                            if (res.body.hasOwnProperty('error'))
                                throw new Error("Cidade nao encontrada");
                        }
                        else
                            throw new Error("Erro");
                    })
                    .expect(200)
                    .end(done);
            });
        });
    });
});