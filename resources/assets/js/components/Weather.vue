<template>
    <div>
        <basic-select :options="locales"
                      :selected-option="localeSelected"
                      placeholder="Pesquisar lugares"
                      @select="onSelect">
        </basic-select>

        <h3 class="text-center" v-if="!localeSelected.value">Busque por uma cidade</h3>

        <h3 v-else="" class="text-center title-prevision">Previsão para {{ dataSearch.locale.name }} - {{ dataSearch.locale.state }}</h3>

        <div class="row" v-show="dataSearch.weather">
            <weather-card v-for="item in dataSearch.weather" :weather="item" :key="item.id"></weather-card>
        </div>
    </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue"
import {BasicSelect} from "vue-search-select"

export default {
    components: { WeatherCard, BasicSelect },

    data() {
        return {
            locales: [],
            localeSelected: {
                value: '',
                text: ''
            },
            searchText: true,
            dataSearch: {
                locale: {
                    name: '',
                    state: ''
                }
            }
        }
    },

    created() {
        //this.featWeather()
        this.featLocales()
    },

    methods: {
        featWeather() {
            axios.get("/api/weather")
                .then(({data}) => {
                    this.dataSearch = data[0]; //Apenas SP
                }, (error) => {
                    console.error(error.response.data)
                })
        },

        featLocales() {
            axios.get("/api/locales")
                .then(({data}) => {
                    this.locales = data.map((locale) => {
                        return { value: locale.id, text: `${locale.name} - ${locale.state}`}
                    })
                }, (error) => {
                    console.error(error.response.data)
                })
        },
        onSelect (item) {
            this.localeSelected = item
        },
        reset () {
            this.localeSelected = {}
        },
        selectOption () {
            // select option from parent component
            this.localeSelected = this.options[0]
        }
    }
}
</script>

<style>
    .title-prevision {
        margin-bottom: 20px;
    }
</style>