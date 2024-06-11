import React from 'react';
import './track.css';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const handleAction = () => {
    if (isRemoval) {
      onRemove(track);
    } else {
      onAdd(track);
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.title}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action" onClick={handleAction}>
        {isRemoval ? '-' : '+'}
      </button>
    </div>
  );
};

export default Track;
