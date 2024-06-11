import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onChange(inputValue);
  };

  return (
    <div className='searchbar-container'>
      <input
        className="searchbar"
        placeholder='Search for a song here!'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
