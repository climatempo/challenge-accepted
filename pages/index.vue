<template>
  <div class="body-container">
    <div class="search-bar">
      <autocomplete
        :source="getSource"
        results-property="locales"
        results-display="name"
        results-value="id"
        @selected="selectLocale($event.selectedObject)"
        @clear="clearLocale"
      />
    </div>
    <div v-show="locale" class="body-content">
      <h4>Previsão para {{ locale }}</h4>
      <div class="card-container">
        <weather-card
          v-for="(weather, index) in weathers"
          :key="index"
          :date="weather.date"
          :text="weather.text"
          :max="weather.temperature.max"
          :min="weather.temperature.min"
          :probability="weather.rain.probability"
          :precipitation="weather.rain.precipitation"
        />
      </div>
    </div>
    <h2 class="p-3 text-center" v-show="!locale">Busque uma cidade para ver as previsões</h2>
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'
import WeatherCard from '@/components/WeatherCard'

export default {
  layout: 'mobile',
  components: {
    Autocomplete,
    WeatherCard
  },
  data: () => ({
    locale: null,
    weathers: []
  }),
  methods: {
    getSource (input) {
      return `${process.env.BASE_URL}/api/locales?q=${input}`
    },
    selectLocale (item) {
      this.locale = `${item.name} - ${item.state}`
      this.$api.getWeatherByLocale(item.id).then((res) => {
        this.weathers = res.data.weathers[0].weather
        console.log(res.data.weathers)
      })
    },
    clearLocale () {
      this.locale = null
      this.weathers = []
    }
  }
}
</script>

<style>
.card-container .card{
  margin-top: 20px;
}
.body-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50px auto;
}
.search-bar {
  background-color: #fff;
}
.body-content {
  padding: 15px;
  padding-top: 25px;
}
</style>
