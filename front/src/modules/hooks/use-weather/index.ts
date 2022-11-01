import { useEffect, useState } from "react";
import fetchWeather from "../../services/fetchWeather";
import { Weather } from "../../types/data";

function useWeather(id?: string) {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    if (id) fetchWeather(setWeather, id);
  }, [id]);

  const locale = weather
    ? `${weather.locale.name} - ${weather.locale.state}`
    : "";

  return { locale, weather };
}

export default useWeather;
