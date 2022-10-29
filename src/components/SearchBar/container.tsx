import { ChangeEventHandler, FormEventHandler, useState } from "react";
import SearchBar from ".";
import useSearchBar from "../../modules/hooks/use-search-bar";

function SearchBarContainer() {
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
  } = useSearchBar();

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
