import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

//external API keys
const KEY = process.env.REACT_APP_API_KEY;
const rapidApiKey = process.env.REACT_APP_RapidAPI_Key;


export default function SearchBar( {sharedData, updateData} ) {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [shoppingResults, setShoppingResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [oneUserData, setOneUserData] = useState({})
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        performSearch(searchInput);
    };

    useEffect(() => {
      UserData(sharedData)
    }, [])

    const UserData = (data) => {
      axios
        .get(`${API}/users`, {
          headers: {
            Authorization: `Bearer ${data.token}`, // Add the JWT token to the request headers
          },
        })
        .then((res) => {
          console.log(res.data)
          setOneUserData(res.data.authorizedData)
        })
        .catch((error) => {
          console.error("catch", error);
        });
    };
    function Logout(){
      updateData('')
      navigate(`/login`);
    }
    
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
          <button onClick={Logout}>
            Logout
          </button>
            <input
                type="text"
                placeholder="What are you looking for?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch} >Search</button>
            <div className="searchResults">
              {console.log(oneUserData)}
                {loading ? <div>Loading...</div> : <SearchResults oneUserData={oneUserData} resultsArray={shoppingResults} />}
            </div>
        </div>
       
    );
};