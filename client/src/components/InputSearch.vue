<template>
  <div id="input-search">
    <input
      id="input"
      type="text"
      v-model="nameCity"
      placeholder="Procurar cidade"
      autocomplete="off"
      @keyup.13="getLocale"
    >
    <button id="btn-submit-search" @click.stop.prevent="getLocale"></button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nameCity: '',
    };
  },

  methods: {
    getLocale() {
      if (this.nameCity) {
        const url = `http://localhost:3000/weathers/${this.nameCity}`;

        axios
          .get(url)
          .then((res) => {
            this.$eventHub.$emit('weathers', res.data.data.weather);
          })
          .catch(() => {
            this.$eventHub.$emit('weathers', []);
          });
      }
    },
  },
};
</script>

<style scoped>
</style>
