export default function SearchForm({ searchTerm, handleSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    handleSearch(formElements.searchTerm.value);

    // FormData -- see JS From Handout
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // handleSearch(data.searchTerm);

    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input type="text" name="searchTerm" id="searchTerm" />
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
