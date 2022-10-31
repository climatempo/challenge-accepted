import Wrapper, { Anchor, Result, Results, Title } from "./styles";
import { Props } from "./types";

function SearchResults({ results }: Props) {
  return (
    <Wrapper>
      <Title>Aqui estão alguns resultados:</Title>
      <Results>
        {results?.map(({ id, name, state }) => (
          <Result key={id}>
            <Anchor to={`/weather/${id}`}>{`${name} - ${state}`}</Anchor>
          </Result>
        ))}
      </Results>
    </Wrapper>
  );
}

export default SearchResults;
