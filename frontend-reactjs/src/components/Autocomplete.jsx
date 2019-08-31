import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 57px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  & input[type=search] {
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    ::placeholder {
      font-size: 1.2em;
    }
  }
`;

export const INPUT_ID = 'ct_autocomplete_data';

const Autocomplete = ({
  list, value, onSearch, onChange,
}) => (
  <Container>
    <InputContainer
      list={list}
      value={value}
      onChange={onChange}
    />
    <SearchButton onSearch={onSearch} />
  </Container>
);

Autocomplete.propTypes = {
  list: PropTypes.array,
  value: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
};

export default Autocomplete;

const InputContainer = ({ list, value, onChange }) => (
  <div style={{ flexGrow: '1' }}>
    <input
      list={INPUT_ID}
      type="search"
      placeholder="Digite o nome da região"
      value={value}
      onChange={onChange}
    />
    <datalist id={INPUT_ID}>
      {list && list.map((l) => (
        <option key={l.id} value={l.name}>{l.name}</option>
      ))}
    </datalist>
  </div>
);

InputContainer.propTypes = {
  list: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const SearchButton = ({ onSearch }) => (
  <div
    style={{ padding: '15px' }}
    onClick={onSearch}
    role="presentation"
  >
    <img
      src={`${window.location.origin}/images/icons/search.png`}
      alt=""
      style={{ height: '23px' }}
    />
  </div>
);

SearchButton.propTypes = {
  onSearch: PropTypes.func,
};
