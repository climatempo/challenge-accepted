import { useQuery } from "react-query";
import { api } from "../apiClient";
import { Locale } from "../models/locale";

export async function SearchLocaleFetch(query: string) {
  const { data } = await api.get<Locale[]>(`/locale/search/${query}}`);
  return data;
}

export function searchLocales(query: string) {
  return useQuery(["search", query], () => SearchLocaleFetch(query), {
    staleTime: Infinity,
  });
}
