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

routes.get("/weather", (request, response) => {
  const { city } = request.query;

  const weatherFiltered = weatherData.find(
    (item: Weather) =>
      item.locale.name.toLowerCase() === String(city).toLowerCase()
  );

  if (!weatherFiltered) {
    return response
      .status(400)
      .json({ message: "Não temos previsões para este local" });
  }

  const weather = weatherFiltered.weather.map(
    (item: Weather, index: number) => ({
      ...item,
      date: moment().add(index, "days"),
    })
  );

  return response.json({
    locale: weatherFiltered.locale,
    weather,
  });
});

export default routes;
