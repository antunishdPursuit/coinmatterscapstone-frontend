import  { useState } from "react";
import SearchBar from "./SearchBar";
// import SearchResults from "./SearchResults";
import "../../CSS/SearchPage.css"

//mock data 
import storeData from "./mockData";
import SearchResults from "./SearchResults";

export default function UserList() {

    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const [cheapestOptions, setCheapestOptions] = useState({});

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

    const findCheapestOptions = (itemList, zipcode) => {
        const updatedCheapestOptions = { ...cheapestOptions };

        //this function filters stores in a specific area when a user enters their zip  
        const validStores = Object.keys(storeData).filter(store => storeData[store].zipcodes.includes(zipcode));
        if (validStores.length === 0) {
            return {}; // No valid stores found
        }

        //now that we have the stores in a specific location we will iterate over them; checking for the cheapest item(s) that closely match user's list
        validStores.forEach(store => {
            updatedCheapestOptions[store] = [];

            //iterate over each item in the user's list
            itemList.forEach(item => {
                const storeProducts = storeData[store].products.filter (product => product.title.toLowerCase().includes(item.toLowerCase())
                );

                //find the cheapest product among the matching products
                if (storeProducts.length > 0) {
                    const cheapestProduct = storeProducts.reduce((min, product) =>  {
                        return product.price < min.price? product : min
                    }, storeProducts[0]);

                    //push the cheapest product into the cheapestOptions[store] array
                    updatedCheapestOptions[store].push({ 
                        item: cheapestProduct.title, 
                        price: cheapestProduct.price, 
                        image: cheapestProduct.thumbnail 
                    });
                }
            });
        });
        setCheapestOptions(updatedCheapestOptions);
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
                    <SearchBar userList={itemList} onSearch={findCheapestOptions} />
                </div>
            </div>
            <div className="deals-container">
                <h3>Your Options</h3>
                <div className="options-container">
                    <SearchResults cheapestOptions={cheapestOptions}/> 
                </div>
            </div>
        </div>
    )
}