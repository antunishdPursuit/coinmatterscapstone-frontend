import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
// import { response } from 'express';
const KEY = process.env.REACT_APP_API_KEY;
const rapidApiKey = process.env.X_RapidAPI_Key;

function App() {
  const [results, setResults] = useState([]);
  const [shoppingResults, setShoppingResults] = useState([]);
  const [loading, setLoading] = useState(false);

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

    // fetch(`https://google-data-scraper.p.rapidapi.com/search/shop/${query}?api_key=${KEY}`, options)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setResults(data);
    //     const shoppingArray = data.shopping_results;
    //     setShoppingResults(shoppingArray);
    //     console.log(data);
    //     console.log(results);
    //     console.log(shoppingArray);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     setLoading(false);
    //   })
    // }

  return (
    <div className="App">
      hello
      <div>
        <h1>API Results Example</h1>
        <SearchBar onSearch={performSearch} />
        {loading ? <div>Loading...</div> : <SearchResults resultsArray={shoppingResults} />}
      </div>
    </div>
  );
}

export default App;
