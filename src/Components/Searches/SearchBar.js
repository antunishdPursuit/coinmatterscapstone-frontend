// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../CSS/Search.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import UserList from "./UserList";



// const API = process.env.REACT_APP_API_URL;

/*
this function is the SearchBar fxn that is responsible for taking the userList, which is the itemList passed down from the UserList component, and onSearch, which is the findCheapestOptions fxn, to store the zipcode and send the information back to the  findCheapestOptions fxn. 
*/

export default function SearchBar({ userList, onSearch }) {
    const [zipcode, setZipcode] = useState("");
    

    const handleSearch = (e) => {
        e.preventDefault();
        setZipcode(e.target.value);
        onSearch(userList, zipcode);
    }
   

    return (
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-bar-bar"
                type="text"
                placeholder="Enter your zip code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
            />
            <div className="buttons">
                    <button className="btn-1">Save my list</button>
                    <button className="btn-2" onClick={handleSearch}>Find my deals</button>
            </div>
          </div>
        </div>
    );
};