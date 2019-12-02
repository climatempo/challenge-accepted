<template>
  <section>
    <div class="row">
      <div class="col px-0">
        <locale-select @change="localeSelected"></locale-select>
      </div>
    </div>
    <div class="row my-3">
      <div class="col">
        <h3>{{ locale }}</h3>
      </div>
    </div>
    <div class="row" v-if="locale">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="weather in weathers" :key="weather.date">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ formatDate(weather.date) }}</h5>
            <p class="card-text">{{ weather.text }}</p>
          </div>
          <div class="card-body bg-light">
            <div class="row align-items-center">
              <div class="col-2 text-center"><span class="fa fa-arrow-up fa-2x"></span></div>
              <div class="col-4"><p class="text-primary">{{ weather.temperature.max }}ºC</p></div>
              <div class="col-2"><span class="fa fa-arrow-down fa-2x"></span></div>
              <div class="col-4"><p class="text-danger">{{ weather.temperature.min }}ºC</p></div>
            </div>
            <div class="row align-items-center mt-2">
              <div class="col-2 text-center"><span class="fa fa-tint fa-2x"></span></div>
              <div class="col-4"><p>{{ weather.rain.precipitation }}mm</p></div>
              <div class="col-2"><span class="fa fa-umbrella fa-2x"></span></div>
              <div class="col-4"><p>{{ weather.rain.probability }}%</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LocaleSelect from "../../../components/LocaleSelect";
import moment from "moment";
export default {
  name: "WeatherPage",
  components: { LocaleSelect },
  data() {
    return {
      locale: ""
    };
  },
  computed: {
    ...mapState("weather", {
      weathers: state => state.weather
    })
  },
  methods: {
    ...mapActions("weather", ["ActionGetWeather"]),
    localeSelected(locale) {
      this.locale = "Previsão para " + locale.name + " - " + locale.state;
      this.ActionGetWeather(locale.id);
    },
    formatDate(date) {
      return moment(String(date)).format('DD/MM/YYYY')
    }
  }
};
</script>
<style scoped>
  .card-body p {
    margin-bottom: 0;
  }
</style>