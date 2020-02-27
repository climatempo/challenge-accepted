import axios from 'axios'

export default function ({ app }, inject) {
  // Create a custom axios instance
  const instance = axios.create({
    baseURL: `${process.env.BASE_URL}/api`,
    timeout: 10000
  })

  const getLocales = () => {
    return instance.get('locales')
  }

  const getWeatherByLocale = (localeId) => {
    return instance.get('weatherByLocale', {
      query: { localeId }
    })
  }

  inject('api', { instance, getLocales, getWeatherByLocale })
}
