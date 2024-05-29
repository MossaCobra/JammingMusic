import React from 'react';
import './playlist.css';

const Playlist = ({ songs, handleRemove }) => {
    return (
        <div className='playlist'>
            <h2>Playlist</h2>
            <ul className='playlist-items'>
                {songs.map((song, index) => (
                    <li key={index} className='playlist-item'>
                        <div className='song-info'>
                            <img src={song.coverImage} alt={song.title} />
                            <div>
                                <h3>{song.title}</h3>
                                <p>{song.artist}</p>
                                <p>{song.album}</p>
                                <p>{song.duration}</p>
                            </div>
                        </div>
                        <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Playlist;
