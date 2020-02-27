<template>
  <div class="body-container">
    <div class="search-bar">
      <autocomplete
        :source="getSource"
        results-property="data"
        results-display="name"
        results-value="id"
        @selected="selectLocale($event.selectedObject)"
      />
    </div>
    <div class="body-content">
      <h4>Previsão para Osasco - SP</h4>
      <div class="card-container">
        <card />
        <card />
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'
import Card from '@/components/Card'

export default {
  layout: 'mobile',
  components: {
    Autocomplete,
    Card
  },
  data: () => ({
    locale: null,
    locales: []
  }),
  methods: {
    getSource (input) {
      return `${process.env.BASE_URL}/api/locales?q=${input}`
    },
    selectLocale (item) {
      this.locale = `${item.name} - ${item.state}`
      console.log(item)
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
