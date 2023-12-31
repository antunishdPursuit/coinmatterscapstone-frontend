import { useState } from "react";
import { AuthData } from "../../context/GetUser"
import { Link } from "react-router-dom";
import UserListItem from "./UserListItem";
import "./UserMenu.css"
const API = process.env.REACT_APP_API_URL;

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
  return (
    <div className="usermenuBox">
      <div className="usermenuBox1">
        <div>{user.username}</div>
        <img src="https://placehold.co/140x200"></img>
        <button className="username_email_button"onClick={showEmail}>{hidden ? "Show" : "Hide"} Email</button>
        {hidden ? 
        <div></div>
        :
        <div className="username_email">{user.email}</div> 
        }
        
        <p>{userList.length === 0 ? <Link className="startSaving" to="/search">Start Saving, Add a List!</Link>: `# of Lists: ${userList.length}`}</p>
      </div>
      <div className="usermenuBox2">
        {userList.length === 0 
        ? 
        <h1 className="usermenuBox2_No_Lists">No Lists have been added</h1>
        : 
        userList.map(list => {
          return (
            <UserListItem key={list.list_id} list={list}></UserListItem>
          )
        })
        }

      </div>
    </div>
  )
}

export default UserMenu