import  { useEffect,useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function UserMenu() {
  const [userList, setUserList] = useState('')
  
  useEffect(() => {
    axios
      .get(`${API}/user`, {
          withCredentials: true,
      })
      .then((res) => {
        setUserList(res.data.authorizedData)
        console.log(res.data)
      })
      .catch((error) => {
          console.error("catch", error);
      });
  }, [])
  
  return (
    <div>UserMenu</div>
  )
}

export default UserMenu