import Wrapper, { Anchor, Text, TextWrapper, Title } from "./styles";

function PageNotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <TextWrapper>
        <Text>
          Ops! Parece que não tem nada sobre a previsão do tempo aqui.
        </Text>
        <Anchor to="/">Clique aqui para ir para a página inicial.</Anchor>
      </TextWrapper>
    </Wrapper>
  );
}

export default PageNotFound;
