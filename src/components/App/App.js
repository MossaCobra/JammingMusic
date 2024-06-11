import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResult';
import Playlist from '../Playlist/Playlist';

const initialSongs = [
  { title: 'Song A', artist: 'Artist 1', album: 'Album 1', id: 1 },
  { title: 'Song B', artist: 'Artist 2', album: 'Album 2', id: 2 },
  { title: 'Song C', artist: 'Artist 3', album: 'Album 3', id: 3 },
  { title: 'Song D', artist: 'Artist 4', album: 'Album 4', id: 4 },
  { title: 'Song E', artist: 'Artist 5', album: 'Album 5', id: 5 },
  // Add more songs as needed
];

function App() {
  const [searchResults, setSearchResults] = useState(initialSongs);
  const [playlist, setPlaylist] = useState([]);

  const handleSearchChange = (query) => {
    const filteredSongs = initialSongs.filter(song => 
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.album.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredSongs);
  };

  const addTrackToPlaylist = (track) => {
    if (!playlist.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylist(playlist.filter(savedTrack => savedTrack.id !== track.id));
  };

  return (
    <div className="App-container">
      <div className="header">
        <h1>Ja<span className="highlight">mmm</span>ing Music</h1>
      </div>
      <div className="main-content">
        <SearchBar onChange={handleSearchChange} />
        <div className="App">
          <SearchResult searchResults={searchResults} onAdd={addTrackToPlaylist} />
          <Playlist playlist={playlist} onRemove={removeTrackFromPlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
