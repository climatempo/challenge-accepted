/* globals Vue, M */
import './components/nav/nav';
import './components/search/search-locale';
import './components/weathers/weathers';
import API from './api';

const template = `
  <div>
    <nav-header />
    <div class="container">
      <br/>
      <br/>
      <search-locale v-bind:location="location" v-on:change="search" />
      <weathers v-bind:weathers="weathers"/>
    </div>
  </div>
`;

const app = new Vue({
  template,
  el: '#app',
  data: () => ({
    location: '',
    weathers: [],
    weathersBD: [],
  }),
  methods: {
    search: function search(locale) {
      if (locale) {
        this.weathers = this.weathersBD.filter(weather => weather.locale.name === locale);
      } else {
        this.weathers = this.weathersBD;
      }
    },
  },
  mounted: function mounted() {
    API.findWeathers().then((data) => {
      this.weathersBD = data;
      this.weathers = data;
    }).catch(() => M.toast({ html: 'Falha ao carregar previsões' }));
  },
});

export default app;
