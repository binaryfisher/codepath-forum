import { Search } from 'semantic-ui-react';
import { useState } from 'react';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  

const SearchBox = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchChange = (event, { value }) => {
        setSearchQuery(value);
      
        // Perform the search and update the search results
        // You can use any search method or API here
        // For example, you can filter an array of items based on the search query
        const results = items.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
      };
      

    return(
        <Search
            placeholder="Search..."
            value={searchQuery}
            onSearchChange={handleSearchChange}
            results={searchResults}
            />

    );
};


export default SearchBox;
