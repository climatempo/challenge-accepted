import React, { createContext, useState, useContext } from "react";

const CityContext = createContext();

export default function CityProvider({ children }) {
  const [citySelect, setCitySelect] = useState([]);

  return (
    <CityContext.Provider
      value={{
        citySelect,
        setCitySelect,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useSelectCity() {
  const context = useContext(CityContext);
  const { citySelect, setCitySelect } = context;

  return { citySelect, setCitySelect };
}
