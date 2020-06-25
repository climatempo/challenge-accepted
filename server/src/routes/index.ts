import { Router } from "express";

import moment from "moment";

import localesData from "../mocks/locales.json";
import weatherData from "../mocks/weather.json";

const routes = Router();

interface Weather {
  locale: {
    name: string;
  };
  weather: [
    {
      date: string;
    }
  ];
}

routes.get("/locales", (request, response) =>
  response.json({ locales: localesData })
);

// routes.get("/weather", (request, response) =>
//   response.json({ locales: weatherData })
// );

routes.get("/weather", (request, response) => {
  const { city } = request.query;

  const weatherFiltered = weatherData.find(
    (item: Weather) => item.locale.name === city
  );

  const weather = weatherFiltered.weather.map(
    (item: Weather, index: number) => ({
      ...item,
      date: moment().add(index, "days"),
    })
  );

  response.json({
    locale: weatherFiltered.locale,
    weather,
  });
});

export default routes;
