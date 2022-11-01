import { Dispatch, SetStateAction } from "react";
import removeSpecialChars from "../../removeSpecialChars";
import { Locale } from "../../types/data";
import { locales } from "../mock";
// import api from "../api";

async function fetchLocales(
  setLocales: Dispatch<SetStateAction<Locale[] | null>>,
  searchValue: string,
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) {
  if (setIsLoading) setIsLoading(true);

  const formattedSearchValue = removeSpecialChars(searchValue);

  // const { data } = await api.get("/locales", {
  //   params: {
  //     query: searchValue ? searchValue : "",
  //   }
  // })

  const filteredLocales = locales.filter(({ name, state }) => {
    const formattedName = removeSpecialChars(`${name} - ${state}`);
    return formattedName.includes(formattedSearchValue);
  });

  setTimeout(() => {
    if (setIsLoading) setIsLoading(false);
    if (filteredLocales.length) setLocales(filteredLocales);
  }, 1000);
}

export default fetchLocales;
