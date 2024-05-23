import React, { useState } from 'react';

const SearchBar = () => {
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

export default SearchBar;