import React, { useState } from "react";
import { SearchButton, SearchInput, SearchWrapper } from "./style";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const fetchLocation = async (value: string) => {
    const url = `http://localhost:8000/location/${value.toLowerCase()}`;
    if (value) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    }
  };

  return (
    <SearchWrapper>
      <SearchInput
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && fetchLocation(inputValue)}
      />
      {inputValue}
      <SearchButton onClick={() => fetchLocation(inputValue) as any} />
    </SearchWrapper>
  );
};

export default Search;
