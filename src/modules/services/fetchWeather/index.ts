import { Dispatch, SetStateAction } from "react";
import { Weather } from "../../types/data";
import { weathers } from "../mock";
// import api from "../api";

async function fetchWeather(
  setWeather: Dispatch<SetStateAction<Weather | null>>,
  id: string
) {
  // const { data } = await api.get("/weather", {
  //   params: {
  //     id,
  //   }
  // })

  const weather = weathers.find(({ locale }) => String(locale.id) === id);

  if (weather) setWeather(weather);
}

export default fetchWeather;
