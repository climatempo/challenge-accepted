import * as request from 'supertest'

describe('LocalesController Testes', () => {
  describe('getAllLocales', () => {

    it('Busca um array com todas as previsões.', async () => {
      await request('http://localhost:5000')
      .get('/weathers/all')
      .expect('Content-Type', /json/)
      .expect(200)
    });

    //Testar o nome e o id da cidade
    it('Busca um array com todas as previsões de uma determinada cidade.', async () => {
      await request('http://localhost:5000')
      .get('/weathers/3734')
      .expect('Content-Type', /json/)
      .expect(200)
    });
  });
});
