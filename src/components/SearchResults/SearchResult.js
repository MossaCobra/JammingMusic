import React from 'react';
import './searchresult.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResult = ({ searchResults, onAdd }) => {
  return (
    <div className="SearchResult">
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

export default SearchResult;
