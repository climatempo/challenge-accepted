import * as request from 'supertest'

describe('LocalesController Testes', () => {
  describe('getAllLocales', () => {

    it('Busca um array com todos os locais.', async () => {
      await request('http://localhost:5000')
        .get('/locales/all')
        .expect('Content-Type', /json/)
        .expect(200)
    })

  })
})
