import { Dispatch, SetStateAction } from "react";
import removeSpecialChars from "../../removeSpecialChars";
import { Locale } from "../../types/data";
import { locales } from "../mock";
import api from "../api";

async function fetchLocales(
  setLocales: Dispatch<SetStateAction<Locale[] | null>>,
  searchValue: string,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  if (setIsLoading) setIsLoading(true);

  try {
    const { data } = await api.get("locales", {
      params: {
        query: searchValue ? searchValue : "",
      }
    })

    if (data.length) setLocales(data);
    if (setIsLoading) setIsLoading(false);
  } catch {
    setLocales(null);
    if (setIsLoading) setIsLoading(false);
  }
}

export default fetchLocales;
