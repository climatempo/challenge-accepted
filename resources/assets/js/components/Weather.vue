<template>
    <div>
        <h3 v-if="dataSearch.weather">Previsão para {{ dataSearch.locale.name }} - {{ dataSearch.locale.state }}</h3>

        <h3 class="text-center" v-else>Busque por uma cidade</h3>

        <div class="row" v-show="dataSearch.weather">
            <weather-card v-for="item in dataSearch.weather" :weather="item" :key="item.id"></weather-card>
        </div>
    </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue"

export default {
    components: { WeatherCard },
    data() {
        return {
            dataSearch: {
                locale: {
                    name: '',
                    state: ''
                }
            }
        }
    },

    created() {
        this.featWeather()
    },

    methods: {
        featWeather() {
            axios.get("/api/weather")
                .then(({data}) => {
                    this.dataSearch = data[0]; //Apenas SP
                }, (error) => {
                    console.error(error.response.data)
                })
        }
    }
}
</script>
