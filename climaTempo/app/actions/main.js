
import axios from 'react-native-axios'
import moment from 'moment/min/moment-with-locales'

import { API_URL } from '../utils/constants'

const reducer = {
  getCities: (state) => {
    return state.data
  },
  getWeather: (state) => {
    moment.locale('pt-br')
    console.log(state.data)
    const data = state.data
    for (let i = 0; i < data.weather.length; i++) {
      data.weather[i].dataFormat = moment(data.weather[i].date).format('DD/MM/YY')   
    }

    return data
  },
}

export default {
  async get() {
    return reducer.getCities(
      await axios.get(`${API_URL}/locales`)
    )
  },
  async getWeather(id) {
    return reducer.getWeather(
      await axios.get(`${API_URL}/weathers/${id}`)
    )
  },
}
