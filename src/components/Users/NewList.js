import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthData } from "../../context/GetUser";
import { useItemListContext } from "../../context/GetItems";

const API = process.env.REACT_APP_API_URL;

export default function NewList() {
    const navigate = useNavigate();
    const { user } = AuthData();
    const { itemList } = useItemListContext();
    const [list, setList] = useState({
        user_id: user.user_id,
        list_name: "",
        products: [...itemList],
        note: "",
    });

    console.log(user.user_id);


    const addList = (list) => {
        const userId = user.user_id;

        //make a POST request to the "/list" route, where all user lists will be stored.
        axios
        //The user_id must be send in the URL as a parameter in order for the /lists route to successful identify and input the user_id. Thus, instead of /lists it is /lists/user.user_id or lists/${userId}. in the backend this is reflected by using "/:user_id" which accepts the user id as a parameter. 
         .post(`${API}/lists/${userId}`, list)
         .then((response) => {
            console.log("List added to the lists route:", response.data);
            setList(response.config.adapter.data);
            navigate('/:user');
         
            //make another POST request to the "/user/:user_id" route to add to the user-specific list 
        //     axios
        //     .post(`${API}/lists/user/${userId}`, list)
        //     .then((responseUser) => {
        //         console.log("List added to /user/:user_id route:", responseUser.data);
        //         setList(responseUser.data);
        //         navigate('/:user');
        //     })
        //     .catch((errorUser) => {
        //         console.error("Error adding list to /user/:user_id route", errorUser);
        //     });
        })
        .catch((e) => {
            console.error("Error adding list to /lists route", e);
        });   
    };

    const  handleTextChange = (e) => {
        setList({...list, [e.target.id]: e.target.value});
        console.log(e.target.value);
    };

    const handleProductChange = (index, value) => {
        const updatedProducts = [...list.products];
        updatedProducts[index] = value;
        setList({ ...list, products: updatedProducts });
    };

    const handleAddProduct = (index, value) => {
        setList({ ...list, products: [...list.products, ""] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //remove empty item
        const filteredProducts = list.products.filter(item => item.trim() !== "");
        setList({ ...list, products: filteredProducts });
        console.log(list);
        addList(list);
    };

    return (
        <div className="new-list">
            <form onSubmit={handleSubmit}>
                <label htmlFor="list_name">Name:</label>
                <input
                    id="list_name"
                    value={list.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of list"
                    required
                />
                <label htmlFor="products">Products:</label>
                {list.products.map((product, index) => (
                    <div key={index}>
                        <input
                            value={product}
                            type="text"
                            onChange={(e) => handleProductChange(index, e.target.value)}
                            placeholder={`Product ${index + 1}`}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddProduct}>
                    Add Product
                </button>
                <label htmlFor="note">Note:</label>
                <textarea 
                    id="note"
                    value={list.note}
                    type="text"
                    placeholder="Any details you want to add?"
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
                <button>
                    <Link to="/search">Nevermind!</Link>
                </button>
            </form>
        </div>
    );
}