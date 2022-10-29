import Wrapper, { Form, Input, SearchButton, SearchIcon } from "./styles";
import { Props } from "./types";

function SearchBar({ onSubmit }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <Input />
      <SearchButton type="submit">
        <SearchIcon src="/icons/search.png" />
      </SearchButton>
    </Form>
  );
}

export default SearchBar;
