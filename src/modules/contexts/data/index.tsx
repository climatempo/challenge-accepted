import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import setupData from "../../setupData";
import { Locale, Weather } from "../../types/data";
import { Props, DataContextState } from "./types";

const DataContext = createContext({} as DataContextState);

export function DataContextProvider({ children }: Props) {
  const [locales, setLocales] = useState<Locale[] | null>(null);
  const [weathers, setWeathers] = useState<Weather[] | null>(null);

  const dependencies = [setWeathers, setLocales];

  const setData = useCallback(
    () => setupData(setWeathers, setLocales),
    dependencies
  );

  useEffect(() => {
    setData();
  }, dependencies);

  const state = useMemo(
    () => ({
      locales,
      weathers,
      setLocales,
      setWeathers,
    }),
    [locales, weathers]
  );

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}

function useDataContext() {
  return useContext(DataContext);
}

export default useDataContext;
