import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//mock data 
import mockData from "./mockData";

const API = process.env.REACT_APP_API_URL;


export default function SearchBar({ userList }) {
    const [searchInput, setSearchInput] = useState("");

    //const navigate = useNavigate(); 

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        const query = searchInput;
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