import { ReactNode } from "react";
import { Locale, Weather } from "../../types/data";

export interface DataContextState {
  locales: Locale[] | null;
  weathers: Weather[] | null;
  setLocales: (locales: Locale[]) => void;
  setWeathers: (weathers: Weather[]) => void;
}

export interface Props {
  children: ReactNode;
}
