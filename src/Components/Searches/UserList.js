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
    const [oneUserData, setOneUserData] = useState('')

    //this is a hover state for user-friendly interface 
    const [isHovered, setIsHovered] = useState(false);
    const [isMinusHovered, setIsMinusHovered] = useState(Array(itemList.length).fill(false));

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

    const removeListItem = (removedItem) => {
        const updatedList = itemList.filter((item)=> item.toLowerCase() !== removedItem.toLowerCase());
        setItemList(updatedList);
    }

    const findCheapestOptions = (itemList, zipcode) => {
        const updatedCheapestOptions = { ...cheapestOptions };

        //this function filters stores in a specific area when a user enters their zip  
        const validStores = Object.keys(storeData).filter(store => storeData[store].zipcodes.includes(zipcode));
        if (validStores.length === 0) {
            setCheapestOptions({});
            setAreaMessage("Sorry, at the moment we do not have store details for that zip code yet. We are working on expanding our location coverage. Please check back soon.")
            return; // No valid stores found
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
                    });
                }
            });
        });
        setCheapestOptions(updatedCheapestOptions);
    };

    const calculateTotalPrice = (cheapestOptions) => {
        console.log(cheapestOptions);

        const totalPrices = {};

        Object.keys(cheapestOptions).forEach(store => {
            const storeItems = cheapestOptions[store];

            const storeTotalPrice = storeItems.reduce((sum, item) => sum + Number(item.price.substring(1)), 0);

            totalPrices[store] = storeTotalPrice.toFixed(2);
        });
        console.log(totalPrices);
        return totalPrices;
    }

//     const bestDeal = (totalPrices) => {
//         if (Object.keys(totalPrices).length === 0) {
//             return null;
//         }

//         const lowestTotalPrice = Object.keys(totalPrices).resude((minTotal, currentTotal) => {
//             return totalPrices[currentTotal] < totalPrices[minTotal] ? currentTotal : minTotal;
//         });

//         return {
//             store: lowestTotalPrice,
//             totalPrice: totalPrices[lowestTotalPrice],
//         };
//     }


    useEffect(() => {
        calculateTotalPrice(cheapestOptions);
//         bestDeal(totalPrices)
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
//                 bestDeal= {bestDeal(totalPrices)}
                /> 
            </div>
        </div>
    )
}