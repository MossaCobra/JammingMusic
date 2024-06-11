import React from 'react';
import './playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({ playlist, onRemove }) => {
  const handleSave = () => {
    //Logic for sporify to be added.
    alert('Playlist saved to Spotify!');
  };

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <Tracklist tracks={playlist} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={handleSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
