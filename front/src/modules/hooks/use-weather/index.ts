import { useEffect, useState } from "react";
import fetchWeather from "../../services/fetchWeather";
import { Weather } from "../../types/data";

function useWeather(id?: string) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) fetchWeather(setWeather, id, setIsLoading);
  }, [id]);

  const locale = weather
    ? `${weather.locale.name} - ${weather.locale.state}`
    : "";

  return { locale, weather, isLoading };
}

export default useWeather;
