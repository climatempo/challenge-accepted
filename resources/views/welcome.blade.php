<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ClimaTempo</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <v-app>
                 <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
                    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                        <img src="images/logo-white.png" style="width:90%;height:90%;margin-top:5px">
                    </v-toolbar-title>
                    <auto-complete @select="onSelect" flat class="hidden-sm-and-down"/>
                </v-toolbar>
                <v-content>
                    <div style="background:white" class="hidden-sm-and-up">
                        <auto-complete @select="onSelect"/>
                    </div>
                    <v-container fluid fill-height grid-list-md>
                        <v-layout justify-center wrap  v-if="selectedWeather!=null">
                            <v-flex xs12 md3 v-for="(weather, i) in selectedWeather" :key="i">
                                <card :weather="weather" />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-content>
            </v-app>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>