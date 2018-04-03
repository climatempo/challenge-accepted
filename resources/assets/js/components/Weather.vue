<template>
    <div>
        <!-- Select locale -->
        <basic-select :options="locales"
                      :selected-option="localeSelected"
                      placeholder="Pesquisar lugares"
                      @select="onSelect">
        </basic-select>

        <transition name="fade">
            <h3 class="text-center title-prevision">{{ title }}</h3>
        </transition>

        <div class="alert alert-danger" v-if="hasError" role="alert">Ops! Houve um erro!</div>

        <!-- A list with the forecasts -->
        <div class="row" v-show="dataSearch.weather">
            <weather-card v-for="item in dataSearch.weather" :weather="item" :key="item.id"></weather-card>
        </div>
    </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue"
import { BasicSelect } from "vue-search-select"

export default {
    components: { WeatherCard, BasicSelect },

    data() {
        return {
            title: 'Pesquise um local',
            locales: [],
            localeSelected: {
                value: '',
                text: ''
            },
            searchText: true,
            dataSearch: {},
            hasError: false
        }
    },

    created() {
        this.featLocales()
    },

    watch: {
        dataSearch() {
            this.title =  Object.keys(this.dataSearch).length === 0
                ? "Nenhum resultado encontrado"
                : `Previsão para ${this.dataSearch.locale.name} - ${this.dataSearch.locale.state}`;
        }
    },

    methods: {
        featWeatherByLocale(locale_id) {
            axios.get(`/api/weather/locale/${locale_id}`)
                .then(({ data }) => {
                    this.dataSearch = data;
                })
                .catch((error) => {
                    console.error(error.response.data)
                    this.hasError = true
                })
        },
        featLocales() {
            axios.get("/api/locales")
                .then(({data}) => {
                    this.locales = data.map((locale) => {
                        return { value: locale.id, text: `${locale.name} - ${locale.state}`}
                    })
                })
                .catch((error) => {
                    console.error(error.response.data)
                    this.hasError = true
                })
        },
        onSelect(itemSelected) {
            this.localeSelected = itemSelected

            this.featWeatherByLocale(itemSelected.value)
        }
    }
}
</script>

<style>
    .title-prevision {
        margin-bottom: 20px;
    }
</style>