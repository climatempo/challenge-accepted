<template>
  <div id="container-weathers">
    <card v-if="weathers.length" v-for="card in weathers" :card="card"></card>
    <not-found v-if="notFound"></not-found>
    <initial v-if="initial"></initial>
  </div>
</template>

<script>
import Card from '@/components/Card';
import NotFound from '@/components/NotFound';
import Initial from '@/components/Initial';

export default {
  name: 'cards',
  data() {
    return {
      weathers: [],
      emited: false,
    };
  },
  components: {
    Card,
    NotFound,
    Initial,
  },
  created() {
    this.$eventHub.$on('weathers', (weathers) => {
      this.weathers = weathers;
      this.emited = true;
    });
  },
  computed: {
    initial() {
      return !this.emited && !this.weathers.length;
    },
    notFound() {
      return this.emited && !this.weathers.length;
    },
  },
};
</script>

<style scoped>
</style>
