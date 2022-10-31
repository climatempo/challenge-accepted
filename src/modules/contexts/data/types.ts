import { Dispatch, ReactNode } from "react";
import { Locale, Weather } from "../../types/data";

export interface DataContextState {
  locales: Locale[] | null;
  weathers: Weather[] | null;
  setLocales: Dispatch<React.SetStateAction<Locale[] | null>>;
  setWeathers: Dispatch<React.SetStateAction<Weather[] | null>>;
}

export interface Props {
  children: ReactNode;
}
