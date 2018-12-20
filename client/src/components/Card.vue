<template>
  <div class="card col-6">
    <div class="card-content">
      <div class="date-card">{{ card.date | formatDate }}</div>
      <div class="message-card">{{ card.text }}</div>
      <div class="infos-card">
        <div class="block-card">
          <div class="max-temp cell-card">
            <i class="img-max image"></i>
            <p class="temperature-max temperature">{{ card.temperature.max }}</p>
          </div>
          <div class="min-temp cell-card">
            <i class="img-min image"></i>
            <p class="temperature-min temperature">{{ card.temperature.min }}</p>
          </div>
        </div>
        <div class="block-card">
          <div class="precipitation cell-card">
            <i class="img-precipitation image"></i>
            <p class="text-precipitation temperature">{{ card.rain.precipitation }}</p>
          </div>
          <div class="probability cell-card">
            <i class="img-probability image"></i>
            <p class="text-probability temperature">{{ card.rain.probability }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['card'],
  filters: {
    formatDate(date) {
      return date
        .split('-')
        .reverse()
        .join('/');
    },
  },
};
</script>

<style scoped>
</style>
