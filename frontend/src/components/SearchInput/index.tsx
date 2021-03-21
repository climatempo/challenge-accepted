import React, { useState } from "react";
import { SearchButton, SearchInput, SearchWrapper } from "./style";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        onChange={handleChange}
        // onKeyDown={(e) => e.key === "Enter" && fetchLocation(inputValue)}
      />
      {inputValue}
      <SearchButton />
    </SearchWrapper>
  );
};

export default Search;
