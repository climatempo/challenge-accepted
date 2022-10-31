import { useEffect, useState } from "react";
import { CardProps } from "../../../components/WeatherCard/types";
import convertRainValue from "../../convertRainValue";
import convertTempValue from "../../convertTempValue";
import { RainUnit, TempUnit } from "../../types/config";
import { Precipitation, Temperature, WeatherData } from "./types";

function useWeatherCardData(
  data: WeatherData,
  rainUnit: RainUnit,
  tempUnit: TempUnit
): CardProps {
  const [temperature, setTemperature] = useState<Temperature | null>(null);
  const [precipitation, setPrecipitation] = useState<Precipitation | null>(
    null
  );

  useEffect(() => {
    convertTempValue(data.temperature, tempUnit, setTemperature)
  }, [tempUnit]);

  useEffect(() => {
    convertRainValue(data.rain.precipitation, rainUnit, setPrecipitation);
  }, [rainUnit]);

  const probability = `${data.rain.probability}%`;
  const date = new Date(data.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return {
    date,
    text: data.text,
    temperature: temperature ? temperature : data.temperature,
    rain: {
      probability,
      precipitation: precipitation ? precipitation : data.rain.precipitation,
    },
  };
}

export default useWeatherCardData;
