<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline">{{ weather.date }}</v-list-item-title>
            <v-list-item-subtitle>{{ weather.text }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col class="temperature-min col-sm-3 col-6">
            <v-card dark color="teal darken-1">
              <v-card-text>
                <v-layout row class="justify-space-between px-2">
                  <v-icon>fas fa-arrow-down</v-icon>
                  <span class="title">{{ weather.temperature.min }}°</span>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="temperature-max col-sm-3 col-6">
            <v-card dark color="red darken-2">
              <v-card-text>
                <v-layout row class="justify-space-between px-2">
                  <v-icon>fas fa-arrow-up</v-icon>
                  <span class="title">{{ weather.temperature.max }}°</span>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="probability col-sm-3 col-6">
            <v-card dark color="blue darken-1">
              <v-card-text>
                <v-layout row class="justify-space-between px-2">
                  <v-icon>fas fa-tint</v-icon>
                  <span class="title">{{ weather.rain.probability }}mm</span>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="precipitation col-sm-3 col-6">
            <v-card dark color="purple darken-3">
              <v-card-text>
                <v-layout row class="justify-space-between px-2">
                  <v-icon>fas fa-umbrella</v-icon>
                  <span class="title">{{ weather.rain.precipitation }}%</span>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Weather',
  props: ['weather']
};
</script>
