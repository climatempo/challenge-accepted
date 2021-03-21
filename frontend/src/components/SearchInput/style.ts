import styled from "styled-components";
import SearchIcon from "../../assets/images/icons/search.png";

export const SearchWrapper = styled.div`
  width: 100vw;
  position: relative;

  @media (min-width: 1000px) {
    width: 500px;
    margin: 20px auto 0;
  }
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Digite o nome da cidade...",
})`
  width: 100%;
  height: 60px;
  border: none;
  font-size: 24px;
  padding-left: 10px;
  color: #414141;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const AutoComplete = styled.ul`
  position: absolute;
  width: 100%;
  list-style: none;
  top: 60px;
`;

export const AutoCompleteItem = styled.li`
  background-color: #ccc;
  width: 100%;
  color: #777;
  padding: 10px 10px;
  border-bottom: 1px solid #b9b9b9;
  font-style: italic;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #b9b9b9;
    border-bottom: 1px solid #fff;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  background: url(${SearchIcon}) no-repeat center;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  opacity: 0.6;

  cursor: pointer;
`;
