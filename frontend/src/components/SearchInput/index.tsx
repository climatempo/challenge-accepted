import React, { useContext, useEffect } from "react";
import {
  AutoComplete,
  AutoCompleteItem,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./style";
import { GlobalContext, TContextProps } from "../../context/GlobalContext";

type TLocation = {
  name: string;
  id?: number;
};

const Search = () => {
  const {
    inputValue,
    setInputValue,
    suggest,
    setSuggest,
    handleSearch,
    Uglify,
  } = useContext(GlobalContext) as TContextProps;

  const autoComplete = (value: string) => {
    const input = value && Uglify(value);
    if (!input) {
      setSuggest([]);
      return;
    }
    const locations = localStorage.getItem("locations") as string;
    const locationData = JSON.parse(locations);

    locationData.filter(({ name }: TLocation) => {
      if (Uglify(name).includes(input)) {
        return setSuggest((old) => Array.from(new Set([...old, name])));
      } else {
        return setSuggest((old) => old.filter((item) => item !== name));
      }
    });
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    autoComplete(inputValue);
  }, [inputValue]);

  return (
    <SearchWrapper>
      <SearchInput onChange={handleChange} value={inputValue} />
      <AutoComplete>
        {suggest.map((item) => (
          <AutoCompleteItem
            key={item}
            onClick={() => {
              handleSearch(item);
            }}
          >
            {item}
          </AutoCompleteItem>
        ))}
      </AutoComplete>
      <SearchButton onClick={() => handleSearch(inputValue)} />
    </SearchWrapper>
  );
};

export default Search;
