<template>
    <div class="col-xs-12 col-md-4">
        <div class="panel panel-default cards">
            <div class="panel-body">
                <span class="text-muted">{{ formattedDate }}</span>

                <div class="row">
                    <div class="col-xs-7">
                        <div class="card-forecast-statistics">
                            <img src="/images/icons/raindrop-close-up.png" alt="Precipitação">
                            <span>{{ weather.rain.precipitation }}mm</span>
                        </div>

                        <div class="card-forecast-statistics">
                            <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="Probabilidade de chuva">
                            <span>{{ weather.rain.probability }}%</span>
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <div class="card-temperature">
                            <p>
                                <i class="glyphicon glyphicon-arrow-up text-warning"></i>
                                <span>{{ weather.temperature.max }}ºC</span>
                            </p>

                            <p>
                                <i class="glyphicon glyphicon-arrow-down text-info"></i>
                                <span>{{ weather.temperature.min }}ºC</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr>

                <p>{{ weather.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: [ "weather" ],

    computed: {
        formattedDate() {
            moment.locale('pt-br')
            return moment(this.weather.date).format('LLL')
        }
    }
}
</script>

<style lang="scss">
    .cards {
        border-radius: .8em;
        transition: box-shadow 0.4s;

        &:hover {
            box-shadow: 4px 4px 4px rgba(0,0,0,.1);
        }
    }
    .card-forecast-statistics {
        display: inline-block;
        width: 75px;
        padding: 10px;
        text-align: center;
        margin-top: 20px;
        margin-left: 12px;

        img {
            width: 42px;
            height: 42px;
        }
    }

    .card-temperature {
        width: 100px;
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        span { font-size: 2.2em; }

        p {
            margin-top: 3px;
        }
    }
</style>