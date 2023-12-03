import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//mock data 
import mockData from "./mockData";

const API = process.env.REACT_APP_API_URL;


export default function SearchBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [oneUserData, setOneUserData] = useState('')

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

  useEffect(() => {
    axios
      .get(`${API}/user`, {
        withCredentials: true,
      })
      .then((res) => {
        setOneUserData(res.data.authorizedData)
        console.log(res.data)
      })
      .catch((error) => {
        console.error("catch", error);
      });
  }, [])
    

  useEffect(() => {
    // Make a request to the server to check for the existence of the HTTP-only cookie
    console.log("Checking loggined in")
    axios.get(`${process.env.REACT_APP_API_URL}/check-login`, { withCredentials: true })
      .then((response) => {
        // If the server responds with a success status, the cookie exists
        setIsLoggedIn(response.status === 200);
      })
      .catch((error) => {
        // If the server responds with an error status, the cookie does not exist
        setIsLoggedIn(false);
      });
  }, []);

    function LogOut(){
      document.cookie = 'dataToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      axios
      .post(`${API}/logout`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        console.log(oneUserData)
        navigate("/")
      })
      .catch((error) => {
        console.error("catch", error);
      });
    }

    return (
        <div className="search-bar-container">
          <div className="search-bar">
          <div>
      {isLoggedIn ? (
        <p>User is logged in.</p>
      ) : (
        <p>User is not logged in.</p>
      )}
    </div>
            <button onClick={LogOut}>Logout</button>
            <input className="search-bar-bar"
                type="text"
                placeholder="Enter your zip code"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#231a1f",fontSize: "24px", fontWeight: "bold"}} /></button>
          </div>
          <div className="message">
              <ul>
                {/* <li>{oneUserData ? ", " + oneUserData.username: ''}?</li> */}
              </ul>
          </div>
        </div>
    );
};