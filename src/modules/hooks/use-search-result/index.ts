function useSearchResult(searchParams?: URLSearchParams) {
  const searchValue = searchParams?.get("query") || "";

  return {
    searchValue,
    results: [],
  }
}

export default useSearchResult;
