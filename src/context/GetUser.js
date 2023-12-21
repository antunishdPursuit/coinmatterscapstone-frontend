import { createContext, useContext, useState } from "react"
import axios from "axios";
import App from "../Routes";
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


const API = process.env.REACT_APP_API_URL;

export const AuthWrapper = () => {
  const [ user, setUser ] = useState({})
  const [ loggedIn, setLoggedIn] = useState(false)

  const instance = axios.create({
    withCredentials: true,
  })

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

  const getUserData = () => {
    instance
      .get(`${API}/user`)
      .then((res) => {
        console.log(res.data.authorizedData)
        setUser(res.data.authorizedData)
        console.log(res.data)
      })
      .catch((error) => {
          console.error("catch", error);
      });
  }

  const logout = () => {
    setUser({...user, isAuthenticated: false})
  }

  return (
    <AuthContext.Provider value={{user, logInUser, logout, getUserData, loggedIn}}>
        <App></App>
    </AuthContext.Provider>
  )
}

