import React, { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [dataWeather, setDataWeather] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        dataWeather,
        setDataWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useDataWeather() {
  const context = useContext(WeatherContext);
  const { dataWeather, setDataWeather } = context;

  return { dataWeather, setDataWeather };
}
