import  { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchResults from "./SearchResults";
import "../../CSS/UserList.css";
import cartIcon from "../../Images/cart-light-icon.png";
import cartIconHover from "../../Images/cart-solid-icon.png";
import circleIcon from "../../Images/circle-minus-light-icon.png";
import circleIconHover from "../../Images/circle-minus-solid-icon.png";
import itemUnavailable from "../../Images/unavailable-item.png";

//mock data 
import storeData from "./mockData";

const API = process.env.REACT_APP_API_URL;

export default function UserList() {
    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [areaMessage, setAreaMessage] = useState("Add items to your list to start searching for the best deals near you!");
    const [cheapestOptions, setCheapestOptions] = useState({});
    const [oneUserData, setOneUserData] = useState('');

    //this is a hover state for list icons such as the shopping cart and minus button  for a user-friendly interface 
    const [isHovered, setIsHovered] = useState(false);
    const [isMinusHovered, setIsMinusHovered] = useState(Array(itemList.length).fill(false));


    //this fxns is responsible for creating the user's grocery list (itemList). Users input grocery items into the input form and on submit an item is added to the itemlist array

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

    //this fxn removes an item from the list if the user no longer wants that on their grocery list
    const removeListItem = (removedItem) => {
        const updatedList = itemList.filter((item)=> item.toLowerCase() !== removedItem.toLowerCase());
        setItemList(updatedList);
    }

    //this fxn takes in the itemList (user's grocery list) and the entered zipcode from the SearchBar component to find validStores. validStores are stores within that zipcode. Stores in the area are then evaluated to check for the cheapest store items that match the items on the user's itemList 
    const findCheapestOptions = (itemList, zipcode) => {
        const updatedCheapestOptions = { ...cheapestOptions };

        //this function filters stores in a specific area when a user enters their zip  
        const validStores = Object.keys(storeData).filter(store => storeData[store].zipcodes.includes(zipcode));
        if (validStores.length === 0) {
            setCheapestOptions({});
            setAreaMessage("Sorry, at the moment we do not have store details for that zip code yet. We are working on expanding our location coverage. Please check back soon.")
            return; //no valid stores found
        }

        //now that we have the stores in a specific location we will iterate over them; checking for the cheapest item(s) that closely match user's list
        validStores.forEach(store => {
            updatedCheapestOptions[store] = [];

            //iterate over each item in the user's list
            itemList.forEach(item => {
                const storeProducts = storeData[store].products.filter(product => product.title.toLowerCase().includes(item.toLowerCase())
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
                        image: cheapestProduct.thumbnail,
                        link: storeData[store].website,
                    });
                } else {
                    updatedCheapestOptions[store].push({ 
                        item: `sorry, our list for ${store} doesn't have ${item}.`,
                        image: itemUnavailable,
                        className: 'unavailable-item',
                        price: 0,
                    });
                }
            });
        });
        setCheapestOptions(updatedCheapestOptions);
    };

    //this fxn takes in the cheapestOptions which is an object of the matched items, store name, and price for each item. this fxn is responsible for calculating and returning the total price for all items within one store. For example, if you have 5 items from Target. the price of all those items are calculated and printed in a human readable form. This fxn returns the store name and the total price of all groceries from that store. Ex: {store: Walmart, total: $18}
    const calculateTotalPrice = (cheapestOptions) => {
        console.log(cheapestOptions);

        const totalPrices = {};

        Object.keys(cheapestOptions).forEach(store => {
            const storeItems = cheapestOptions[store];

            const storeTotalPrice = storeItems.reduce((sum, item) => {
                if(item.className ==='unavailable-item'){
                    return sum;
                }

                return sum + Number(item.price.substring(1))
            }, 0);

            totalPrices[store] = storeTotalPrice.toFixed(2);
        });
        console.log(totalPrices);
        return totalPrices;
    }

    //Prices is a global variable. I created it inside the main scope. I wanted to use the return values from the calculateTotalPrice fxn, thus, I stored it in the prices variable so that I can access it globally - quick tip - another way to do this is to make a use state that will update the totalPrices object. 
    const prices = calculateTotalPrice(cheapestOptions);

    //bestDeal takes in the prices variable which is an object with store names and their total for all items, compares them, and returns the store with the least lowest total cost. Ex: {store: Walmart, total: $18}.  
    const bestDeal = (prices) => {
        if (Object.keys(prices).length === 0) {
            return null;
        }

        let cheapestStore;
        let lowestTotal = Infinity;

        Object.keys(prices).forEach((store) => {
            const totalPrice = parseFloat(prices[store]);

            if (totalPrice < lowestTotal) {
                lowestTotal = totalPrice; 
                cheapestStore = store;
            }
        });

        return {
            store: cheapestStore,
            totalPrice: lowestTotal,
        };
    }

//useEffect is used to update the states and information inside the objects cheapestOptions and prices.
    useEffect(() => {
        calculateTotalPrice(cheapestOptions);
        bestDeal(prices);
        console.log(bestDeal(prices));
    }, [cheapestOptions]);

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

    return (
        <div className="search-page-container">
            <div className="user-list-container">
                <div className="username">
                    <h3>{sessionStorage.getItem("LoggenIn") === "True" ? `${oneUserData.username} List` : "Your List"}</h3>
                    {console.log(oneUserData)}
                    {console.log(sessionStorage.getItem("LoggenIn") === "True")}
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
                    <button style={{ all: 'unset' }} className="list-icon" onClick={addItem} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img
                            src={isHovered ? cartIconHover : cartIcon }
                            alt="cart icon"
                        />
                    </button>
                </div>
                <div className="error-message">
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </div>
                <div className="user-box">
                    <div className="user-list">
                        <ul>
                            {itemList.map((item, i) => (
                            <>
                                <div className="item">
                                    <li key={i}>{item}</li>
                                    <button 
                                        className="list-icon" 
                                        key ={i}
                                        style={{all: "unset"}} 
                                        onMouseEnter={() => {
                                            const newHoverStates = [...isMinusHovered];
                                            newHoverStates[i] = true;
                                            setIsMinusHovered(newHoverStates);
                                        }}
                                        onMouseLeave={() => {
                                            const newHoverStates = [...isMinusHovered];
                                            newHoverStates[i] = false;
                                            setIsMinusHovered(newHoverStates);
                                        }}
                                        onClick={() => removeListItem(item)}>
                                        <img 
                                            src={isMinusHovered[i] ? circleIconHover : circleIcon}
                                            alt="minus icon"
                                        />
                                    </button>
                                </div>
                            </>      
                            ))}
                        </ul>
                    </div>
                    <div className="zip-search">
                        <span>zip code</span>
                        <SearchBar userList={itemList} onSearch={findCheapestOptions} />
                    </div>
                </div>
            </div>
            <div className="deals-container">
                <h3>Your Options</h3>
                <SearchResults cheapestOptions={cheapestOptions} areaMessage={areaMessage} totalPrices = {calculateTotalPrice(cheapestOptions)} 
                bestDeal = {bestDeal(prices)}
                /> 
            </div>
        </div>
    )
}