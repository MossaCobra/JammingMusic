import './searchbar.css';

const SearchBar = ({ search }) => {
    return (
        <div className='searchbar-container'>
            <input 
            className="searchbar"
            placeholder='Search for a song here!' 
            type='text' 
            onChange={search} 
            />
            <button>Search</button>
        </div>
    );
}


export default SearchBar;