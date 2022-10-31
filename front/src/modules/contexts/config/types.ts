import { Dispatch, ReactNode, SetStateAction } from "react";
import { RainUnit, TempUnit } from "../../types/config";

export interface ConfigContextState {
  rainUnit: RainUnit;
  tempUnit: TempUnit;
  setRainUnit: Dispatch<SetStateAction<RainUnit>>;
  setTempUnit: Dispatch<SetStateAction<TempUnit>>;
}

export interface Props {
  children: ReactNode;
}
