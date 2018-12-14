describe('Rota -> Cidades', () => {
    let request = supertest(setupApp());

    describe('/GET locales', () => {
        it('deve retornar uma lista de cidades', done => {
            request
                .get('/locales')
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
            it('deve retornar uma cidade', done => {
                request
                    .get('/locales/osasco')
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