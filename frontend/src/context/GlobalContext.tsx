import React, { createContext, useState } from "react";
import weatherFetch from "../utils/WeatherFetch";
import Uglify from "../utils/UglifyString";

export type TContextProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  suggest: string[];
  setSuggest: (initial: string[] | ((value: string[]) => string[])) => void;
  searching: boolean;
  handleSearch: (value: string) => void;
  Uglify: (value: string) => string;
  result: TResult;
  notFound: boolean;
  convertTemperature: boolean
  convertRain: boolean
  toggleTemperature: () => void
  toggleRain: () => void
};

export type TResult = {
  locale: {
    id: number;
    name: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  weather: TWeather[];
};

export type TWeather = {
  date: string;
  text: string;
  temperature: {
    min: number;
    max: number;
  };
  rain: {
    probability: number;
    precipitation: number;
  };
};

export const GlobalContext = createContext({});

export const GlobalStorage = ({ children }: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggest, setSuggest] = useState<string[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [result, setResult] = useState<any>({});
  const [notFound, setNotFound] = useState<boolean>(false);
  const [convertTemperature, setConvertTemperature] = useState<boolean>(false)
  const [convertRain, setConvertRain] = useState<boolean>(false)

  const handleSearch = async (value: string) => {
    setSearching(true);
    const response = await weatherFetch(Uglify(value));

    if (Object.keys(response).length) {
      const {
        weatherLocation: { locale, weather },
      } = response;
      setResult({ locale, weather });
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    setSearching(false);
    setInputValue("");
  };

  const toggleTemperature = () => setConvertTemperature(!convertTemperature)
  const toggleRain = () => setConvertRain(!convertRain)

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
        notFound,
        convertTemperature,
        convertRain,
        toggleTemperature,
        toggleRain
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
