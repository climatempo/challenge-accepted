import * as SC from "./styles";
import chuvaLeveIcon from '../../assets/icons/icons8-chuva-leve.gif';
import tempestadeIcon from '../../assets/icons/icons8-tempestade.gif';
import diaNubladoIcon from '../../assets/icons/icons8-dia-nublado.gif';
import { IoWater, IoArrowDown, IoArrowUp } from "react-icons/io5";

export function SearchCity(props) {
  const { name, text, temperatureMin, temperatureMax, precipitation } = props;
  const isCloudy = text.includes("Períodos de nublado");
  const isRain   = text.includes("Chove rápido");
  const isStorm  = text.includes("Pancadas de chuva");

  return (
    <SC.SearchCityContainer
        id={props.id}
        onClick={props.onClick}
    >
      <SC.Icon>
          {isCloudy &&
            <img src={diaNubladoIcon} alt="Icon"/>
          }
          {isRain &&
            <img src={chuvaLeveIcon} alt="Icon"/>
          }
          {isStorm &&
            <img src={tempestadeIcon} alt="Icon"/>
          }
          {!isCloudy && !isRain && !isStorm &&
            <img src={diaNubladoIcon} alt="Icon"/>
          }
      </SC.Icon>
      <SC.Name>{name}</SC.Name>
      <SC.Text>{text}</SC.Text>
      <SC.Temperature>
          <span className="temp"><IoArrowUp className="icon-max"/>{temperatureMax}Cº</span>
          <span className="temp"><IoArrowDown className="icon-min"/>{temperatureMin}Cº</span>
          <span className="precipitation"><IoWater className="icon-precipitation"/>{precipitation}mm</span>
      </SC.Temperature>
    </SC.SearchCityContainer>
  );
}
