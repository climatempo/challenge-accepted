import { useSearchParams } from "react-router-dom";
import useSearchResult from "../../modules/hooks/use-search-result";
import SearchResults from "../SearchResults";
import SearchResultTitle from "../SearchResultTitle";
import Wrapper from "./styles";

function SearchResultContainer() {
  const [searchParams] = useSearchParams();
  const { searchValue, results } = useSearchResult(searchParams);

  return (
    <Wrapper>
      <SearchResultTitle searchValue={searchValue} />
      <SearchResults results={results} />
    </Wrapper>
  );
}

export default SearchResultContainer;
