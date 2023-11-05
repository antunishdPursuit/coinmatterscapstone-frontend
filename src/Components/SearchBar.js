import { useState } from "react";
import SearchResults from "./SearchResults";

//external API keys
const KEY = process.env.REACT_APP_API_KEY;
const rapidApiKey = process.env.REACT_APP_RapidAPI_Key;


export default function SearchBar() {
    const [results, setResults] = useState([]);
    const [shoppingResults, setShoppingResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        performSearch(searchInput);
    };

    const performSearch = async (query) => {
        setLoading(true);
    
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
          }
        };
        
        try {
          const response = await fetch(
            `https://google-data-scraper.p.rapidapi.com/search/shop/${query}?api_key=${KEY}`,
            options
          );
    
          if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
          }
    
          const data = await response.json();
          setResults(data);
          const shoppingArray = data.shopping_results;
          setShoppingResults(shoppingArray);
          console.log(data);
          console.log(results);
          console.log(shoppingArray);
          setLoading(false);
        } catch (error) {
          console.error('Error:', error);
          setLoading(false);
        }
      }



    return (
        <div>
            <input
                type="text"
                placeholder="What are you looking for?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch} >Search</button>
            <div className="searchResults">
                {loading ? <div>Loading...</div> : <SearchResults resultsArray={shoppingResults} />}
            </div>
        </div>
       
    );
};