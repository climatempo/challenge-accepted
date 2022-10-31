import { Dispatch } from "react";
import { Locale, Weather } from "../types/data";
import { locales, weathers } from "./mocks";

function setupData(
  setWeathers: Dispatch<React.SetStateAction<Weather[] | null>>,
  setLocales: Dispatch<React.SetStateAction<Locale[] | null>>
) {
  setWeathers(weathers);
  setLocales(locales);
}

export default setupData;
