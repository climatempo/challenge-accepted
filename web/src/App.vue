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
                    item-text="name"
                    full-width
                    hide-details
                    autofocus
                    single-line
                    clearable></v-autocomplete>
          </v-toolbar>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content class="weather-container">
      <Weather/>
      <Weather/>
      <Weather/>
      <Weather/>
      <Weather/>
      <Weather/>
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
      locales () { return this.$store.getters.locales }
  },
  beforeCreate () {
    this.$store.dispatch('findAllLocales');
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
