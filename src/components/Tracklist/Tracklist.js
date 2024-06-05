import React from 'react';
import './tracklist.css';
import Track from '../Track/Track';

const Tracklist = ({ tracks }) => {
  return (
    <div className="Tracklist">
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default Tracklist;
