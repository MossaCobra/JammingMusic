import React, { useState } from 'react';

const searchBar = () => {
    const [userInput, setUserInput] = useState('');
    
    const handleSearch = (event) => {
        setUserInput(event.target.value);
    };

    return (
        <div className="search-bar">
            <input 
                type="text"
                value={userInput}
                onChange={handleSearch}
                placeholder="Search ..."
            />
        </div>
    )
};