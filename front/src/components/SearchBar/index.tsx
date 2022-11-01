import {
  Form,
  Input,
  SearchButton,
  SearchIcon,
  Sugestions,
  Sugestion,
  SugestionButton,
} from "./styles";
import { Props } from "./types";

function SearchBar({
  onSubmit,
  onChange,
  onFocus,
  onBlur,
  handleRouterPush,
  displaySugestions,
  sugestions,
  value,
  isFocused,
}: Props) {
  return (
    <Form onSubmit={onSubmit} isFocused={isFocused}>
      <Input
        type="search"
        placeholder="Vitória - ES"
        onFocus={onFocus}
        debounceTimeout={500}
        onBlur={onBlur}
        onChange={onChange}
        isFocused={isFocused}
        value={value}
      />
      <SearchButton type="submit">
        <SearchIcon src="/icons/search.png" isFocused={isFocused} />
      </SearchButton>
      {displaySugestions && (
        <Sugestions>
          {sugestions.map(({ id, name, state }) => (
            <Sugestion key={id}>
              <SugestionButton
                onClick={handleRouterPush(id)}
              >{`${name} - ${state}`}</SugestionButton>
            </Sugestion>
          ))}
        </Sugestions>
      )}
    </Form>
  );
}

export default SearchBar;
