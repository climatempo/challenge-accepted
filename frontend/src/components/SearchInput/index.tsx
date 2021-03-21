import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  AutoCompleteItem,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./style";
import Uglify from "../../utils/UglifyString";

type TLocation = {
  name: string;
  id: number;
};

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggest, setSuggest] = useState<string[]>([]);

  const autoComplete = () => {
    const value = inputValue && Uglify(inputValue);
    const locations = localStorage.getItem("locations") as string;
    const locationData = JSON.parse(locations);

    locationData.filter(({ name }: TLocation) => {
      if (Uglify(name).includes(value)) {
        return setSuggest((old) => Array.from(new Set([...old, name])));
      } else {
        return setSuggest((old) => old.filter((item) => item !== name));
      }
    });
    if (!value) setSuggest([]);
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    autoComplete();
  }, [inputValue]);

  return (
    <SearchWrapper>
      <SearchInput onChange={handleChange} />
      <AutoComplete>
        {suggest.map((item) => (
          <AutoCompleteItem key={item}>{item}</AutoCompleteItem>
        ))}
      </AutoComplete>
      <SearchButton />
    </SearchWrapper>
  );
};

export default Search;
