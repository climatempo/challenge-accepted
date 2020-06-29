import React from 'react';
import './styles.scss';

const Search = ({ onSearch }) => {
  return (
    <section className="bgSearch">
      <section className="bgSearch-input">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            id="search"
            data-cy="input-search"
            name="search"
            placeholder="Type your fetch..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>
      </section>
    </section>
  );
};

export default Search;
