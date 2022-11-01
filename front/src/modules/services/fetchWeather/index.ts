import { Dispatch, SetStateAction } from "react";
import { Weather } from "../../types/data";
import { weathers } from "../mock";
// import api from "../api";

async function fetchWeather(
  setWeather: Dispatch<SetStateAction<Weather | null>>,
  id: string,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  // const { data } = await api.get("/weather", {
  //   params: {
  //     id,
  //   }
  // })

  const weather = weathers.find(({ locale }) => String(locale.id) === id);

  setTimeout(() => {
    if (weather) setWeather(weather);
    if (setIsLoading) setIsLoading(false);
  }, 2000);
}

export default fetchWeather;
