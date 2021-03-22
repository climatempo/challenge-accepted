import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardParahraph,
  CardTitle,
  IndicatorIcon,
  TemperatureDisplay,
} from "./style";

import DownArrow from "../../assets/images/icons/down-arrow.png";
import UpArrow from "../../assets/images/icons/up-arrow.png";
import Umbrella from "../../assets/images/icons/umbrella.png";
import Rain from "../../assets/images/icons/rain.png";
import { GlobalContext, TContextProps, TWeather } from "../../context/GlobalContext";


type TCardsProps = {
  data: TWeather;
};

const COLORS = {
  MAX: "#d65858",
  MIN: "#82B7D7",
};

const Cards = ({ data }: TCardsProps) => {
  const { convertRain, convertTemperature } = useContext(GlobalContext) as TContextProps
  const formattedDate = data.date.split("-").reverse().join("/")

  const convertTemperatureValue = (value: number) => {
    return Math.round((value * 1.8) + 32)
  }

  const convertRainValue = (value: number) => {
    return ((value / 25.4)).toFixed(2)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{formattedDate}</CardTitle>
          <CardParahraph>{data.text}</CardParahraph>
        </CardHeader>
        <CardBody>
          <TemperatureDisplay color={COLORS.MAX}>
            <IndicatorIcon src={UpArrow} alt="UpArrow icon" />
            {convertTemperature 
              ? `${convertTemperatureValue(data.temperature.max)}°F`
              : `${data.temperature.max}°C`
            }
          </TemperatureDisplay>
          <TemperatureDisplay color={COLORS.MIN}>
            <IndicatorIcon src={DownArrow} alt="DownArrow icon" />
            {convertTemperature 
              ? `${convertTemperatureValue(data.temperature.min)}°F`
              : `${data.temperature.min}°C`
            }
          </TemperatureDisplay>
          <TemperatureDisplay>
            <IndicatorIcon src={Rain} alt="Rain icon" />
            {convertRain 
              ? `${convertRainValue(data.rain.precipitation)}inch`
              : `${data.rain.precipitation}mm`
            }
            
          </TemperatureDisplay>
          <TemperatureDisplay>
            <IndicatorIcon src={Umbrella} alt="Umbrella icon" />
            {data.rain.probability}%
          </TemperatureDisplay>
        </CardBody>
      </Card>
    </>
  )
};

export default Cards;
