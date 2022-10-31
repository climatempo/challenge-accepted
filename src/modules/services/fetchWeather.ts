import { Dispatch, SetStateAction } from "react";
import { Weather } from "../types/data";
import { weathers } from "./mock";
// import api from "../api";

async function fetchWeather(
  setWeather: Dispatch<SetStateAction<Weather | null>>,
  id: number
) {
  // const { data } = await api.get("/weather", {
  //   params: {
  //     id,
  //   }
  // })

  const weather = weathers.find(({ locale }) => locale.id === id);

  if (weather) setWeather(weather);
}

export default fetchWeather;
