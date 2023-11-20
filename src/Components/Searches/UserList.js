import { useState } from "react";
import SearchBar from "./SearchBar";
import "../../CSS/SearchPage.css"

export default function UserList() {

    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    const addItem = () => {
        if (inputValue.trim() !== '') {
            //check for duplicate list items
            if (itemList.includes(inputValue)) {
                setErrorMessage("Item already added to the list");
            } else {
                //Clear the input for the next entry
                setItemList([...itemList, inputValue.toLowerCase()]);
                setInputValue('');
                setErrorMessage('');
            }
        };
    };

    return (
        <div className="search-page-container">
            <div className="user-list-container">
                <div className="username">
                    <h3>Your List</h3>
                </div>
                <div className="item-search">
                    <input
                        id="item-search"
                        type="text"
                        placeholder="Add your items"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                        // style={{ textAlign: "center" }}
                    />
                    <button onClick={addItem}>+</button>
                </div>
                <div className="error-message">
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </div>
                <div className="user-list">
                    <ul>
                        {itemList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="zip-search">
                    zip code
                    <SearchBar />
                </div>
                <div className="buttons">
                    <button>Save my list</button>
                    <button>Find my deals</button>
                </div>
            </div>
            <div className="deals-container">
                <h3>Your Options</h3>
                <div className="options-container">
                    user results go here 
                </div>
            </div>
        </div>
    )
}