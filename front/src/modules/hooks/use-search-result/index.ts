import { useEffect, useState } from "react";
import fetchLocales from "../../services/fetchLocales";
import { Locale } from "../../types/data";

function useSearchResult(searchParams?: URLSearchParams) {
  const searchValue = searchParams?.get("query") || "";
  const [results, setResults] = useState<Locale[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLocales(setResults, searchValue,setIsLoading);
  }, [searchValue]);

  return {
    searchValue,
    results,
    isLoading,
  }
}

export default useSearchResult;
