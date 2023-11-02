import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchInput);
    };


    return (
        <div>
            <input
                type="text"
                placeholder="What are you looking for?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch} >Search</button>
        </div>
       
    )
};