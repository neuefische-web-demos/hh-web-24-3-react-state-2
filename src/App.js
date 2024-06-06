import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './styles.css';
import { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  console.log('SEARCH TERM', searchTerm);

  function handleSearch(searchFieldValue) {
    setSearchTerm(searchFieldValue);
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} handleSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
