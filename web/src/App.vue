<template>
  <v-app>
    <v-app-bar class="blue darken-2 pa-2" app>
      <v-container>
        <v-row align="center" justify="center" class="logo-row pa-4">
          <v-img :src="require('@/assets/climatempo.png')" max-width="180px"></v-img>
        </v-row>
        <v-row>
          <v-toolbar dense floating>
            <v-autocomplete
                    label="Localização"
                    :items="locales"
                    v-model="selected"
                    v-on:change="changeLocale"
                    item-text="name"
                    full-width
                    hide-details
                    single-line
                    return-object
                    autofocus
                    clearable></v-autocomplete>
          </v-toolbar>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content class="weather-container">
      <h1 v-if="selected" class="display-1 px-6 pb-2 text-center">Previsão para {{selected.name}}</h1>
      <Weather v-for="w in weather" :weather="w" class="col-lg-6"/>
    </v-content>
  </v-app>
</template>

<script>
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
      Weather,
  },
  computed: {
      locales () { return this.$store.getters.locales },
      weather () { return this.$store.getters.weather },
  },
  methods: {
    changeLocale () {
        this.$store.dispatch('findAllWeatherByLocale', this.selected)
    }
  },
  beforeCreate () {
    this.$store.dispatch('findAllLocales');
  },
  data () {
    return {
        selected: null
    }
  }
};
</script>

<style>
  .logo-row {
    margin-top: 22px;
  }
  .weather-container {
    margin-top: 70px;
  }
</style>
