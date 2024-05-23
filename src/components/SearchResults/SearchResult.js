// src/components/SearchResults/SearchResults.js
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './searchresult.css';

function SearchResult() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResult;