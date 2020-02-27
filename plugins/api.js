import axios from 'axios'

export default function ({}, inject) {
  // Create a custom axios instance
  const instance = axios.create({
    baseURL: `${process.env.BASE_URL}/api`,
    timeout: 10000
  })

  const getLocales = () => {
    return instance.get('locales')
  }

  const getWeather = () => {
    return instance.get('weather')
  }

  inject('api', { instance, getLocales, getWeather })
}
