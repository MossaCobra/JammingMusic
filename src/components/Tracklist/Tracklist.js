import React from 'react';

function TrackList({ tracks }) {
  // Step 5: Render tracks dynamically
  return (
    <div className="TrackList">
      {tracks.map(track => (
        <div className="Track" key={track.id}>
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
