import { Dispatch, SetStateAction } from "react";
import { Temperature } from "../hooks/use-weather-card-data/types";
import { TempUnit } from "../types/config";

function convertTempValue(
  dataTemperature: Temperature,
  tempUnit: TempUnit,
  setTemperature: Dispatch<SetStateAction<Temperature | null>>
) {
  if (tempUnit === TempUnit.Celsius) {
    const temperature = {
      min: `${dataTemperature.min} °C`,
      max: `${dataTemperature.max} °C`,
    };

    setTemperature(temperature);
    return;
  }

  const temperature = {
    min: `${Math.round(Number(dataTemperature.min) * 1.8 + 32)} °F`,
    max: `${Math.round(Number(dataTemperature.max) * 1.8 + 32)} °F`,
  };

  setTemperature(temperature);
}

export default convertTempValue;
