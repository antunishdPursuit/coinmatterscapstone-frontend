import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


//external API keys
// const KEY = process.env.REACT_APP_API_KEY;
// const rapidApiKey = process.env.REACT_APP_RapidAPI_Key;


//mock data 
import mockData from "./mockData";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate(); 

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        const query = searchInput;
        // performSearch(searchInput);

        //remove this for MVP version
        const filteredResults = mockData.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())
        );

        
       // Pass filteredResults as route state
        navigate(`/search-results/${query}`, { state: { filteredResults } });
    };




    // const performSearch = async (query) => {
    //     setLoading(true);
    
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': rapidApiKey,
    //         'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
    //       }
    //     };
        
    //     try {
    //       const response = await fetch(
    //         `https://google-data-scraper.p.rapidapi.com/search/shop/${query}?api_key=${KEY}`,
    //         options
    //       );
    
    //       if (!response.ok) {
    //         throw new Error('Request failed with status ' + response.status);
    //       }
    
    //       const data = await response.json();
    //       setResults(data);
    //       const shoppingArray = data.shopping_results;
    //       setShoppingResults(shoppingArray);
    //       console.log(data);
    //       console.log(results);
    //       console.log(shoppingArray);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error('Error:', error);
    //       setLoading(false);
    //     }
    //   }



    return (
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-bar-bar"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{ textAlign: "center" }}
            />
            <button className="search-button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#231a1f",fontSize: "24px", fontWeight: "bold"}} /></button>
          </div>
          <div className="message">
              <ul>
                <li>What's on your list?</li>
                <li>Start your search above</li>
              </ul>
          </div>
        </div>
       
    );
};