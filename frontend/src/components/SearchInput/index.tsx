import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  AutoCompleteItem,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./style";
import Uglify from "../../utils/UglifyString";

import weatherFetch from "../../utils/WeatherFetch";

type TLocation = {
  name: string;
  id: number;
};

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggest, setSuggest] = useState<string[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [result, setResult] = useState<any>([]);

  const autoComplete = (value: string) => {
    const input = value && Uglify(value);
    const locations = localStorage.getItem("locations") as string;
    const locationData = JSON.parse(locations);

    locationData.filter(({ name }: TLocation) => {
      if (Uglify(name).includes(input)) {
        return setSuggest((old) => Array.from(new Set([...old, name])));
      } else {
        return setSuggest((old) => old.filter((item) => item !== name));
      }
    });
    if (!input) setSuggest([]);
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async (value: string) => {
    setSearching(true);
    const response = await weatherFetch(Uglify(value));
    setResult(response);
    setSearching(false);
    setInputValue("");
  };

  useEffect(() => {
    autoComplete(inputValue);
  }, [inputValue]);

  return (
    <SearchWrapper>
      {searching && <p>Buscando...</p>}
      <SearchInput onChange={handleChange} value={inputValue} />
      {JSON.stringify(result)}
      <AutoComplete>
        {suggest.map((item) => (
          <AutoCompleteItem
            key={item}
            onClick={() => setInputValue(item) as void}
          >
            {item}
          </AutoCompleteItem>
        ))}
      </AutoComplete>
      <SearchButton
        onClick={async () => (await handleSearch(inputValue)) as void}
      />
    </SearchWrapper>
  );
};

export default Search;
