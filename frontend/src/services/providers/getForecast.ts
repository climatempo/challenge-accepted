import { useQuery } from "react-query";
import { api } from "../apiClient";
import { Forecast } from "../models/forecast";

export async function getForecastFetch(localeID: string) {
  const { data } = await api.get<Forecast>(`/forecast/${localeID}`);
  return data;
}

export function getForecast(localeID: string) {
  return useQuery(["forecast", localeID], () => getForecastFetch(localeID), {
    staleTime: Infinity,
  });
}
