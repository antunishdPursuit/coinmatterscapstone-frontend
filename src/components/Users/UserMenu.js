import { useState } from "react";
import { AuthData } from "../../context/GetUser"
import { Link } from "react-router-dom";
import UserListItem from "./UserListItem";
import "./UserMenu.css"
// const API = process.env.REACT_APP_API_URL;

function UserMenu() {
  const { user } = AuthData()
  const { userList } = AuthData()
  const [ hidden, setHidden] = useState(false)

  function showEmail() {
    if(hidden === false){
      setHidden(true)
    } else {
      setHidden(false)

    }
  }
  function capitalizeFirstLetter(str) {
    if(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
  const lists = userList.lists;

  return (
    <div className="usermenuBox">
      <div className="usermenuBox1">
        <div className="profile-pic">
          <img src="https://t3.ftcdn.net/jpg/02/96/66/58/360_F_296665879_g3GUJU6Vv9KzKkcNyaQ4uXEcCzRT6hSc.jpg" alt="a woman who uses this app"></img>
        </div>
        <div className="user-name">{capitalizeFirstLetter(user.username)}</div>
        <button className="username_email_button"onClick={showEmail}>{hidden ? "Hide" : "Show"} Email</button>
        {hidden ? 
        <div className="username_email">{user.email}</div> 
        :
        <div></div>
        }
        <p>{lists.length === 0 ? <Link className="startSaving" to="/search">Start Saving, Add a List!</Link>: `Number of Lists: ${lists.length}`}</p>
      </div>
      <div className="usermenuBox2">
        {lists.length === 0 
        ? 
        <h1 className="usermenuBox2_No_Lists">No Lists have been added</h1>
        : 
        lists.map(list => {
          return (
            <UserListItem 
              key={list.list_id}
              list={list} 
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default UserMenu;