// src/components/Track/Track.js
import React from 'react';
import './track.css';

const Track = ({ track }) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.title}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;
