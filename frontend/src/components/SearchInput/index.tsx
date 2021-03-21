import React, { useContext, useEffect } from "react";
import {
  AutoComplete,
  AutoCompleteItem,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./style";
import { GlobalContext } from "../../context/GlobalContext";

type TLocation = {
  name: string;
  id?: number;
};

type TContextProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  suggest: string[];
  setSuggest: (initial: string[] | ((value: string[]) => string[])) => void;
  searching: boolean;
  handleSearch: (value: string) => void;
  Uglify: (value: string) => string;
};

const Search = () => {
  const {
    inputValue,
    setInputValue,
    suggest,
    setSuggest,
    searching,
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
      {searching && <p>Buscando...</p>}
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
