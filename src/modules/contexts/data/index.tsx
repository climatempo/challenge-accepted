import { createContext, useContext, useMemo, useState } from "react";
import { Locale, Weather } from "../../types/data";
import { Props, DataContextState } from "./types";

const DataContext = createContext({} as DataContextState);

export function DataContextProvider({ children }: Props) {
  const [locales, setLocales] = useState<Locale[] | null>(null);
  const [weathers, setWeathers] = useState<Weather[] | null>(null);

  const state = useMemo(() => ({
    locales,
    weathers,
    setLocales,
    setWeathers,
  }), [locales, weathers])

  return (
    <DataContext.Provider value={state}>
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  return useContext(DataContext);
}

export default useDataContext;
