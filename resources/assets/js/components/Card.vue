<template>
    <transition name="fade">
        <v-card>
            <v-card-title class=" py-4" style="font-style:normal">
                <span style="font-weight:bold;">{{weather.date | date}}</span>
                {{weather.text}}
            </v-card-title>
            <v-container grid-list-sm class="pa-4 grey lighten-4">
                <v-layout row wrap>
                    <v-flex xs12>
                        <table style="width:100%">
                            <tr>
                                <td>
                                    <img src="images/icons/upload.png" class="icon">
                                    <span style="color:blue">{{weather.temperature.max}} ºC</span>
                                </td>
                                <td>
                                    <img src="images/icons/download.png" class="icon">
                                    <span style="color:red">{{weather.temperature.min}} ºC</span>
                                </td>
                            </tr>
                        </table>
                        <table style="width:100%;margin-top:30px">
                            <tr>
                                <td>
                                    <img src="images/icons/raindrop-close-up.png" class="icon"> {{weather.rain.precipitation}} ºC
                                </td>
                                <td>
                                    <img src="images/icons/umbrella.png" class="icon"> {{weather.rain.probability}} ºC
                                </td>
                            </tr>
                        </table>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </transition>
</template>
<script> export default { props: ['weather'] }</script>
<style scoped>
    .icon { vertical-align: middle;  margin-right: 10px;}
    table { font-weight: bold; font-size: 1.3em;}
    .fade-enter-active,.fade-leave-active { transition: opacity 0.5s;}
    .fade-enter, .fade-leave-to { opacity: 0;}
</style>