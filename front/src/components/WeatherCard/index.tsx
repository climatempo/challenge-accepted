import Wrapper, {
  BodyItem,
  CardBody,
  CardBodyWrapper,
  Date,
  Header,
  Icon,
  ItemText,
  Text,
} from "./styles";
import { CardProps } from "./types";

function WeatherCard({ date, text, temperature, rain }: CardProps) {
  return (
    <Wrapper>
      <Header>
        <Date>{date}</Date>
        <Text>{text}</Text>
      </Header>
      <CardBodyWrapper>
        <CardBody>
          <BodyItem>
            <Icon src="/icons/arrowup.png" />
            <ItemText color="#2086c3">{temperature.max}</ItemText>
          </BodyItem>
          <BodyItem>
            <Icon src="/icons/arrowdown.png" />
            <ItemText color="#cd4b4b">{temperature.min}</ItemText>
          </BodyItem>
          <BodyItem>
            <Icon src="/icons/raindrop.png" />
            <ItemText>{rain.precipitation}</ItemText>
          </BodyItem>
          <BodyItem>
            <Icon src="/icons/umbrella.png" />
            <ItemText>{rain.probability}</ItemText>
          </BodyItem>
        </CardBody>
      </CardBodyWrapper>
    </Wrapper>
  );
}

export default WeatherCard;
