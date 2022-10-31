import { useNavigate } from "react-router-dom";
import SearchBar from ".";
import useDataContext from "../../modules/contexts/data";
import useSearchBar from "../../modules/hooks/use-search-bar";

function SearchBarContainer() {
  const { locales } = useDataContext()

  const {
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    handleRouterPush,
    isFocused,
    searchValue,
    sugestions,
    displaySugestions,
  } = useSearchBar(useNavigate(), locales);

  return (
    <SearchBar
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      handleRouterPush={handleRouterPush}
      value={searchValue}
      isFocused={isFocused}
      displaySugestions={displaySugestions}
      sugestions={sugestions}
    />
  );
}

export default SearchBarContainer;
