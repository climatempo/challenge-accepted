import { Dispatch, ReactNode, SetStateAction } from "react";
import { Locale, Weather } from "../../types/data";

export interface DataContextState {
  locales: Locale[] | null;
  weathers: Weather[] | null;
  setLocales: Dispatch<SetStateAction<Locale[] | null>>;
  setWeathers: Dispatch<SetStateAction<Weather[] | null>>;
}

export interface Props {
  children: ReactNode;
}
