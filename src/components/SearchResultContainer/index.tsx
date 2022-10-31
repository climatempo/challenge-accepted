import { useSearchParams } from "react-router-dom";
import useDataContext from "../../modules/contexts/data";
import useSearchResult from "../../modules/hooks/use-search-result";
import SearchResults from "../SearchResults";
import SearchResultTitle from "../SearchResultTitle";
import Wrapper from "./styles";

function SearchResultContainer() {
  const { locales } = useDataContext();
  const [searchParams] = useSearchParams();
  const { searchValue, results } = useSearchResult(searchParams, locales);

  return (
    <Wrapper>
      <SearchResultTitle searchValue={searchValue} />
      <SearchResults results={results} />
    </Wrapper>
  );
}

export default SearchResultContainer;
