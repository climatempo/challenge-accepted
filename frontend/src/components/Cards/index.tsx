import React from "react";
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
import { TWeather } from "../../context/GlobalContext";

type TCardsProps = {
  data: TWeather;
};

const COLORS = {
  MAX: "#d65858",
  MIN: "#82B7D7",
};

const Cards = ({ data }: TCardsProps) => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>{data.date}</CardTitle>
        <CardParahraph>{data.text}</CardParahraph>
      </CardHeader>
      <CardBody>
        <TemperatureDisplay color={COLORS.MAX}>
          <IndicatorIcon src={UpArrow} alt="UpArrow icon" />
          {data.temperature.max}
        </TemperatureDisplay>
        <TemperatureDisplay color={COLORS.MIN}>
          <IndicatorIcon src={DownArrow} alt="DownArrow icon" />{" "}
          {data.temperature.min}
        </TemperatureDisplay>
        <TemperatureDisplay>
          <IndicatorIcon src={Rain} alt="Rain icon" />
          {data.rain.precipitation}
        </TemperatureDisplay>
        <TemperatureDisplay>
          <IndicatorIcon src={Umbrella} alt="Umbrella icon" />
          {data.rain.probability}
        </TemperatureDisplay>
      </CardBody>
    </Card>
  </>
);

export default Cards;
