<template>
    <div>
        <h3 v-if="dataSearch.locale">Previsão para {{ dataSearch.locale.name }} - {{ dataSearch.locale.state }}</h3>

        <div class="row">
            <div class="col-xs-12 col-md-4">
                <weather-card v-for="item in dataSearch.weather" :weather="item" :key="item.id"></weather-card>
            </div>
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
