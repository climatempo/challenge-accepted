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

const COLORS = {
  MAX: "#d65858",
  MIN: "#82B7D7",
};

const Cards = () => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>01/02/217</CardTitle>
        <CardParahraph>
          Sol com muitas nuvens durante o dia. Periodos de nublado, com chuva a
          qualquer hora.
        </CardParahraph>
      </CardHeader>
      <CardBody>
        <TemperatureDisplay color={COLORS.MAX}>
          <IndicatorIcon src={UpArrow} alt="testanto" />
          30°C
        </TemperatureDisplay>
        <TemperatureDisplay color={COLORS.MIN}>
          <IndicatorIcon src={DownArrow} alt="testanto" /> 20°C
        </TemperatureDisplay>
        <TemperatureDisplay>
          <IndicatorIcon src={Rain} alt="testanto" />
          7mm
        </TemperatureDisplay>
        <TemperatureDisplay>
          <IndicatorIcon src={Umbrella} alt="testanto" />
          70%
        </TemperatureDisplay>
      </CardBody>
    </Card>
  </>
);

export default Cards;
