import React, { createContext, useEffect, useState } from "react";
import weatherFetch from "../utils/WeatherFetch";
import Uglify from "../utils/UglifyString";

export const GlobalContext = createContext({});

export const GlobalStorage = ({ children }: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggest, setSuggest] = useState<string[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [result, setResult] = useState<any[]>([]);

  const handleSearch = async (value: string) => {
    setSearching(true);
    const response = await weatherFetch(Uglify(value));
    setResult(response);
    setInputValue("");
  };

  useEffect(() => {
    setSearching(false);
  }, [result]);

  return (
    <GlobalContext.Provider
      value={{
        inputValue,
        setInputValue,
        suggest,
        setSuggest,
        searching,
        result,
        handleSearch,
        Uglify,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
