import { Dispatch, SetStateAction } from "react";
import { Weather } from "../../types/data";
import api from "../api";

async function fetchWeather(
  setWeather: Dispatch<SetStateAction<Weather | null>>,
  id: string,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  try {
    const { data } = await api.get<Weather>("weather", {
      params: {
        id,
      },
    });

    setWeather(data);
    if (setIsLoading) setIsLoading(false);
  } catch {
    setWeather(null);
    if (setIsLoading) setIsLoading(false);
  }
}

export default fetchWeather;
