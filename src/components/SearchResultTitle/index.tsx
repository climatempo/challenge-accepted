import Wrapper, { Title } from "./styles";
import { Props } from "./types";

function SearchResultTitle({ searchValue }: Props) {
  return (
    <Wrapper>
      <Title>Você buscou por: {searchValue}</Title>
    </Wrapper>
  );
}

export default SearchResultTitle;
