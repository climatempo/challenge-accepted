import { useQuery } from "react-query";
import { api } from "../apiClient";
import { Locale } from "../models/locale";

export async function ListLocaleFetch() {
  const { data } = await api.get<Locale[]>(`/locale/overview`);
  return data;
}

export function getLocales() {
  return useQuery(["locales"], ListLocaleFetch, {
    staleTime: Infinity,
  });
}
