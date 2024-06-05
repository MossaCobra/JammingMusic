import './searchresult.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResult = ({ searchResult }) => {
  return (
    <div className="SearchResult">
      <h2>Results</h2>
      <Tracklist tracks={searchResult} />
    </div>
  );
}

export default SearchResult;
