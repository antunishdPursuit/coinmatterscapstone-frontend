import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import App from "../Routes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const API = process.env.REACT_APP_API_URL;

const instance = axios.create({
  withCredentials: true,
});

export const AuthWrapper = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState({});
  const location = useLocation();

  const getUserList = useCallback((userId) => {
    console.log(userId);
    instance
      .get(`${API}lists/user/${userId}`)
      .then((res) => {
        setUserList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user list", error);
      });
  }, []);

  const getUserData = useCallback(() => {
    instance
      .get(`${API}/user`)
      .then((res) => {
        setUser(res.data.authorizedData);
        if (res.data.authorizedData) {
          getUserList(res.data.authorizedData.user_id);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  }, [getUserList]);

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  useEffect(() => {
    if (user) {
      getUserList(user.user_id);
    }
  }, [user, getUserList]);

  useEffect(() => {
    console.log(`The current route is ${location.pathname}`);
    console.log("Checking logged in");
    axios
      .get(`${process.env.REACT_APP_API_URL}/check-login`, { withCredentials: true })
      .then((response) => {
        // If the server responds with a success status, the cookie exists
        console.log("Cookie Set");
        getUserData();
        setLoggedIn(true);
      })
      .catch((error) => {
        // If the server responds with an error status, the cookie does not exist
        console.error("Error checking login status", error);
        console.log("Cookie Not Set");
      });
  }, [location, getUserData, setLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, logInUser, logout, getUserData, loggedIn, userList }}>
      <App />
    </AuthContext.Provider>
  );
};
