import removeSpecialChars from "../../removeSpecialChars";
import { Locale } from "../../types/data";

function useSearchResult(searchParams?: URLSearchParams, locales?: Locale[] | null) {
  const searchValue = searchParams?.get("query") || "";

  const searchResults = locales?.filter(({ name, state }) => {
    const formattedName = removeSpecialChars(`${name} - ${state}`);
    return formattedName.includes(searchValue.toLowerCase());
  });

  const filteredLocales = locales?.filter(({ name, state }) => {
    const formattedName = removeSpecialChars(`${name} - ${state}`);
    return !formattedName.includes(searchValue.toLowerCase());
  })

  const results = searchResults?.concat(filteredLocales || []);

  return {
    searchValue,
    results,
  }
}

export default useSearchResult;
