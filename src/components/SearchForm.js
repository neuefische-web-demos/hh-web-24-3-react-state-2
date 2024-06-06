import { useState } from 'react';

export default function SearchForm({ searchTerm, handleSearch }) {
  const [searchFieldValue, setSearchFieldValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSearch(searchFieldValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchFieldValue}
          onChange={(event) => {
            setSearchFieldValue(event.target.value);
          }}
        />
        <button type="submit">
          <span role="img" aria-label="search icon">
            🔍
          </span>
          Search
        </button>
      </form>
      <h2>{searchTerm ? `You searched for "${searchTerm}"` : 'Please enter a search term'}</h2>
    </>
  );
}
