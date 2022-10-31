import { Dispatch, SetStateAction } from "react";
import removeSpecialChars from "../removeSpecialChars";
import { Locale } from "../types/data";
import { locales } from "./mock";
// import api from "../api";

async function fetchLocales(
  setLocales: Dispatch<SetStateAction<Locale[] | null>>,
  searchValue?: string
) {
  // const { data } = await api.get("/locales", {
  //   params: {
  //     query: searchValue ? searchValue : "",
  //   }
  // })

  const filteredLocales = locales.filter(({ name, state }) => {
    const formattedName = removeSpecialChars(`${name} - ${state}`);
    return formattedName.includes(searchValue?.toLowerCase() || "");
  });

  setLocales(filteredLocales);
}

export default fetchLocales;
