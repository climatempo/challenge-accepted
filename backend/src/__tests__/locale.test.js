import supertest from 'supertest'

import app from '../app'

const request = supertest(app)

describe('Locale endpoint', () => {
  it('should return data all of locales', async () => {
    const response = await request.get('/locales')

    expect(response.statusCode).toEqual(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it('should return data from São Paulo locale', async () => {
    const response = await request.get('/locales/São Paulo')

    expect(response.statusCode).toEqual(200)
    expect(response.body).not.toBeNull()
    expect(response.body).toEqual(expect.objectContaining({ 'name': 'São Paulo', 'state': 'SP' }))
  })
})