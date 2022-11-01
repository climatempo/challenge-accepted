import { createContext, useContext, useMemo, useState } from "react";
import { RainUnit, TempUnit } from "../../types/config";
import { ConfigContextState, Props } from "./types";

const ConfigContext = createContext({} as ConfigContextState);

export function ConfigContextProvider({ children }: Props) {
  const storedRainUnit = Number(localStorage.getItem("rainUnit"));
  const storedTempUnit = Number(localStorage.getItem("tempUnit"));

  const [rainUnit, setRainUnit] = useState(storedRainUnit || RainUnit.Mm);
  const [tempUnit, setTempUnit] = useState(storedTempUnit || TempUnit.Celsius);

  const state = useMemo(
    () => ({
      rainUnit,
      tempUnit,
      setRainUnit,
      setTempUnit,
    }),
    [rainUnit, tempUnit]
  );

  return (
    <ConfigContext.Provider value={state}>{children}</ConfigContext.Provider>
  );
}

export function useConfigContext() {
  return useContext(ConfigContext);
}

export default ConfigContext;
