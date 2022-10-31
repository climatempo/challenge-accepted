import Wrapper, {
  BodyItem,
  CardBody,
  Date,
  Header,
  Icon,
  ItemText,
  Text,
} from "./styles";
import { Props } from "./types";

function WeatherCard({ data }: Props) {
  return (
    <Wrapper>
      <Header>
        <Date>{data.date}</Date>
        <Text>{data.text}</Text>
      </Header>
      <CardBody>
        <BodyItem>
          <Icon src="/icons/arrowup.png" />
          <ItemText color="#2086c3">{data.temperature.max}</ItemText>
        </BodyItem>
        <BodyItem>
          <Icon src="/icons/arrowdown.png" />
          <ItemText color="#cd4b4b">{data.temperature.min}</ItemText>
        </BodyItem>
        <BodyItem>
          <Icon src="/icons/raindrop.png" />
          <ItemText>{data.rain.precipitation}</ItemText>
        </BodyItem>
        <BodyItem>
          <Icon src="/icons/umbrella.png" />
          <ItemText>{data.rain.probability}</ItemText>
        </BodyItem>
      </CardBody>
    </Wrapper>
  );
}

export default WeatherCard;
