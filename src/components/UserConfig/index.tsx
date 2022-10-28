import { useState } from "react";
import Wrapper, {
  Button,
  ConfigButton,
  Dropdown,
  Image,
  List,
  ListItem,
  ConfigButtonsWrapper,
  Span,
  Title,
} from "./styles";

enum TempUnits {
  celsius = 0,
  fahrenheit = 1,
}

enum RainUnits {
  mm = 0,
  inch = 1,
}

function UserConfig() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tempUnit, setTempUnit] = useState<TempUnits>(TempUnits.celsius);
  const [rainUnit, setRainUnit] = useState<RainUnits>(RainUnits.mm);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTempUnit = (unit: TempUnits) => () => {
    setTempUnit(unit);
  };

  const handleRainUnit = (unit: RainUnits) => () => {
    setRainUnit(unit);
  };

  return (
    <Wrapper>
      <Button onClick={handleDropdown} data-id="cogwheel-button">
        <Image src="/icons/cogwheel.png" alt="Configurações" />
      </Button>
      {isDropdownOpen && (
        <Dropdown data-id="cogwheel-dropdown">
          <Title>Unidades de medida</Title>
          <List>
            <ListItem>
              <Span>Temperatura</Span>
              <ConfigButtonsWrapper>
                <ConfigButton
                  onClick={handleTempUnit(TempUnits.celsius)}
                  isActive={tempUnit === TempUnits.celsius}
                >
                  °C
                </ConfigButton>
                <ConfigButton
                  onClick={handleTempUnit(TempUnits.fahrenheit)}
                  isActive={tempUnit === TempUnits.fahrenheit}
                >
                  °F
                </ConfigButton>
              </ConfigButtonsWrapper>
            </ListItem>
            <ListItem>
              <Span>Chuva</Span>
              <ConfigButtonsWrapper>
                <ConfigButton
                  onClick={handleRainUnit(RainUnits.mm)}
                  isActive={rainUnit === RainUnits.mm}
                >
                  mm
                </ConfigButton>
                <ConfigButton
                  onClick={handleRainUnit(RainUnits.inch)}
                  isActive={rainUnit === RainUnits.inch}
                >
                  inch
                </ConfigButton>
              </ConfigButtonsWrapper>
            </ListItem>
          </List>
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default UserConfig;
