import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} style={searchStyle}>
      <input
        type="text"
        placeholder="Search for a bike or car..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const searchStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px'
};

export default SearchBar;
