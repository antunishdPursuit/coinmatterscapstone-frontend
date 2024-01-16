import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import App from "../Routes";
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const API = process.env.REACT_APP_API_URL;

export const AuthWrapper = () => {
  const [ loggedIn, setLoggedIn] = useState(false)
  const [ user, setUser ] = useState({})
  const [ userList, setUserList] = useState({})
  const location = useLocation();

  const instance = axios.create({
    withCredentials: true,
  })

  // Logging in the user
  const logInUser = (existingUser) => {
    console.log("Attempting login...");
    instance
      .post(`${API}/login`, existingUser)
      .then((res) => {
        console.log("Login successful");
        setLoggedIn(true)
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

    //Makes it so that every time the route changes, the function is triggered
  useEffect(() => {
    console.log(`The current route is ${location.pathname}`);
    console.log("Checking loggined in")
    axios.get(`${process.env.REACT_APP_API_URL}/check-login`, { withCredentials: true })
      .then((response) => {
        // If the server responds with a success status, the cookie exists
        console.log("Cookie Set")
        getUserData()
        setLoggedIn(true)
      })
      .catch((error) => {
        // If the server responds with an error status, the cookie does not exist
        console.log("Cookie Not Set", error);
      });
  }, [location]);

  const getUserData = () => {
    instance
      .get(`${API}/user`)
      .then((res) => {
        setUser(res.data.authorizedData)
        console.log(user);
        // getUserList(res.data.authorizedData.user_id)
      })
      .catch((error) => {
          console.error("catch", error);
      });
  }

  useEffect(() => {
    if (user) {
      getUserList(user.user_id)
    }
  }, [user]);

  // get user list
  const getUserList = (userId) => {
    console.log(userId)
    instance
      .get(`${API}/lists/user/${userId}`)
      .then((res) => {
        setUserList(res.data)
        console.log(userList);
      })
      .catch((error) => {
          console.error("catch", error);
      });
  }

  const logout = () => {
    setUser({...user, isAuthenticated: false})
  }

  return (
    <AuthContext.Provider value={{user, logInUser, logout, getUserData, loggedIn, userList}}>
        <App></App>
    </AuthContext.Provider>
  )
}