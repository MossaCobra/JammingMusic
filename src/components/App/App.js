import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResult';
import Playlist from '../Playlist/Playlist';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleRemoveTrack = (index) => {
    const updatedTracks = [...playlistTracks];
    updatedTracks.splice(index, 1);
    setPlaylistTracks(updatedTracks);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <Container fluid>
        <Row>
          <Col md={6}>
            <SearchResult />
          </Col>
          <Col md={6}>
            {/* Pass down playlistName and playlistTracks to the Playlist component */}
            <Playlist
              playlistName={playlistName}
              songs={playlistTracks}
              handleRemove={handleRemoveTrack}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
