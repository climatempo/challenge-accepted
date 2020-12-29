import supertest from 'supertest'

import app from '../app'

const request = supertest(app)

describe('Weather endpoint', () => {
  it('should return data of all weathers', async () => {
    const response = await request.get('/weathers')

    expect(response.statusCode).toEqual(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it('should return weather data from Osascos', async () => {
    const response = await request.get('/weathers/Osasco')

    expect(response.statusCode).toEqual(200)
    expect(response.body).not.toBeNull()
  })
})