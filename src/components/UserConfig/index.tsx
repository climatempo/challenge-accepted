import { RainUnits, TempUnits } from "../../modules/types/config";
import Span from "../Span";
import Wrapper, {
  Button,
  ConfigButton,
  Dropdown,
  Image,
  List,
  ListItem,
  ConfigButtonsWrapper,
  Title,
  CloseButton,
  CloseImage,
} from "./styles";
import { Props } from "./types";

function UserConfig({ handleDropdown, handleTempUnit, handleRainUnit, tempUnit, rainUnit, isDropdownOpen }: Props) {
  return (
    <Wrapper>
      <Button onClick={handleDropdown} data-id="cogwheel-button">
        <Image src="/icons/cogwheel.png" alt="Configurações" />
      </Button>
      {isDropdownOpen && (
        <Dropdown data-id="cogwheel-dropdown">
          <CloseButton onClick={handleDropdown}>
            <CloseImage src="/icons/close.png" alt="Fechar" />
          </CloseButton>
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
