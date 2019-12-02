import Vue from "vue";
import Router from "vue-router";

import LayoutDefault from "src/layouts/LayoutDefault";
import WeatherPage from "src/modules/weather/pages/WeatherPage";

Vue.use(Router);

export default [
  {
    path: "/",
    name: "IndexPage",
    component: LayoutDefault,
    redirect: { name: "WeatherPage" },
    children: [
      {
        path: "",
        name: "WeatherPage",
        component: WeatherPage
      }
    ]
  },
  {
    path: "*",
    component: {}
  }
];
