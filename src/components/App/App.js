import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResult';
import Tracklist from '../Tracklist/Tracklist';

const songs = [
  { title: 'Song A', artist: 'Artist 1', album: 'Album 1', id: 1 },
  { title: 'Song B', artist: 'Artist 2', album: 'Album 2', id: 2 },
  // Add more songs as needed
];

function App () {
  const [searchResult, setSearchResult] = useState({ songs });
 
  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchResult(value);
  };

  return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing Music</h1>
        <div className="App">
        <SearchBar onChange={handleSearchChange} />
        </div>
    </div>
  );
}

export default App;