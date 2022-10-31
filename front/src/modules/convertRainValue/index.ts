import { Dispatch, SetStateAction } from "react";
import { Precipitation } from "../hooks/use-weather-card-data/types";
import { RainUnit } from "../types/config";

function convertRainValue(
  dataPrecipitation: Precipitation,
  rainUnit: RainUnit,
  setPrecipitation: Dispatch<SetStateAction<Precipitation | null>>
) {
  if (rainUnit === RainUnit.Mm) {
    const precipitation = `${dataPrecipitation} mm`;
    setPrecipitation(precipitation);
    return;
  }

  const formattedValue = Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(Number(dataPrecipitation) / 25.4);

  const precipitation = `${formattedValue} inch`;

  setPrecipitation(precipitation);
}

export default convertRainValue;
