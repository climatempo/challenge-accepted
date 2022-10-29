import { Form, Input, SearchButton, SearchIcon } from "./styles";
import { Props } from "./types";

function SearchBar({ onSubmit, onFocus, onBlur, isFocused }: Props) {
  return (
    <Form onSubmit={onSubmit} isFocused={isFocused}>
      <Input
        type="search"
        placeholder="Vitória - ES"
        onFocus={onFocus}
        onBlur={onBlur}
        isFocused={isFocused}
      />
      <SearchButton type="submit">
        <SearchIcon src="/icons/search.png" isFocused={isFocused} />
      </SearchButton>
    </Form>
  );
}

export default SearchBar;
