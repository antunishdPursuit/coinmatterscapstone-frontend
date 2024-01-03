import { useEffect,useState } from "react";
import axios from "axios";
import "./UserListItem.css"
const API = process.env.REACT_APP_API_URL;

function UserListItem({ list }) {
  const [listItems, setListItems] = useState([])
  const instance = axios.create({
    withCredentials: true,
  })

  useEffect(() => {
    // the 2 should be replaced by ${list.user_id} after evertyhing else works
    instance
      .get(`${API}/users/${list.user_id}/lists/${list.list_id}/products`)
      .then((res) => {
        console.log(res.data)
        setListItems(res.data)
      })
      .catch((error) => {
          console.error("catch", error);
      });
  }, [])
  
  return (
    <div key={list.list_id} className="userListItem_box">
      <p className="userListItem_box_name">Name: {list.list_name}</p>
      <div className="userListItem_box_flex" >
        {listItems.map((items, index) => {
          return (
            <div key={index} className="userListItem_box_features">
              <img src="https://placehold.co/100x160" className="userListItem_box_features_img"></img>
              <div className="userListItem_box_features_items">
                <p>{items.product_name}</p>
                <p id="userListItem_box_features_items_price">$ {items.price.toFixed(2)}</p>
                <p>From: {items.source}</p>
                <p>Quantity: {items.quantity}</p>
              </div>
            </div>
          )
        })}
      </div>
  </div>
  )
}

export default UserListItem