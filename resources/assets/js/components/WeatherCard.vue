<template>
    <div class="col-xs-12 col-md-4">
        <div class="panel panel-default cards">
            <div class="panel-body">
                <span class="text-muted">{{ formattedDate }}</span>

                <div class="row">
                    <div class="col-xs-7">
                        <div class="card-forecast-statistics">
                            <img src="/images/icons/raindrop-close-up.png" alt="">
                            {{ weather.rain.precipitation }}mm
                        </div>

                        <div class="card-forecast-statistics">
                            <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="">
                            {{ weather.rain.probability }}%
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <div class="card-temperature">
                            <i class="glyphicon glyphicon-arrow-up text-warning"></i> <span>{{ weather.temperature.max }}ºC</span>
                            <br>
                            <i class="glyphicon glyphicon-arrow-down text-info"></i> <span>{{ weather.temperature.min }}ºC</span>
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
export default {
    props: [ "weather" ],

    computed: {
        formattedDate() {
            let date = new Date(this.weather.date)
            return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
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
        margin-top: 28px;
        left: auto;
        text-align: center;
    }

    .card-temperature {
        width: 100px;
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        span { font-size: 2.5em; }
    }
</style>