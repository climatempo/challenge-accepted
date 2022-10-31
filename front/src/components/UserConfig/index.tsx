import { RainUnit, TempUnit } from "../../modules/types/config";
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
                  onClick={handleTempUnit(TempUnit.Celsius)}
                  isActive={tempUnit === TempUnit.Celsius}
                >
                  °C
                </ConfigButton>
                <ConfigButton
                  onClick={handleTempUnit(TempUnit.Fahrenheit)}
                  isActive={tempUnit === TempUnit.Fahrenheit}
                >
                  °F
                </ConfigButton>
              </ConfigButtonsWrapper>
            </ListItem>
            <ListItem>
              <Span>Chuva</Span>
              <ConfigButtonsWrapper>
                <ConfigButton
                  onClick={handleRainUnit(RainUnit.Mm)}
                  isActive={rainUnit === RainUnit.Mm}
                >
                  mm
                </ConfigButton>
                <ConfigButton
                  onClick={handleRainUnit(RainUnit.Inch)}
                  isActive={rainUnit === RainUnit.Inch}
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
