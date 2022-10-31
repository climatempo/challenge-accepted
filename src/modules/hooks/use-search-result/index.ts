import { useEffect, useState } from "react";
import fetchLocales from "../../services/fetchLocales";
import { Locale } from "../../types/data";

function useSearchResult(searchParams?: URLSearchParams) {
  const searchValue = searchParams?.get("query") || "";
  const [results, setResults] = useState<Locale[] | null>(null);

  useEffect(() => {
    fetchLocales(setResults, searchValue);
  }, [searchValue]);

  return {
    searchValue,
    results,
  }
}

export default useSearchResult;
