// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
// PAGES

import Results from "./pages/Results"

// COMPONENTS
import NavBar from "./components/NavBar";
import About from "./pages/About"
import Home from "./pages/Home";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Cart from "./pages/Cart"
import UserList from "./components/Searches/UserList";
import UserMenu from "./components/Users/UserMenu"

// Auth
import { AuthData } from "./context/GetUser"



function App() {
    const { loggedIn } = AuthData();

  const updateData = newData => {
    // Make a request to the server to check for the existence of the HTTP-only cookie
    console.log("Checking loggined in")
    axios.get(`${process.env.REACT_APP_API_URL}/check-login`, { withCredentials: true })
    .then((response) => {
      // If the server responds with a success status, the cookie exists
      console.log("Session Storage Set")
      sessionStorage.setItem("LoggenIn", "True");
      window.location.reload()
    })
    .catch((error) => {
      // If the server responds with an error status, the cookie does not exist
      console.log("Session Storage Not Set")
      console.log(sessionStorage.getItem("LoggenIn") === "True")
      sessionStorage.clear();
    });
  };

  return (
    <div className="app">
          <NavBar></NavBar>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route 
              path="/search" 
              element={<UserList/>} />
              <Route path="/search-results/:query" element={<Results />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" 
              element={loggedIn 
              ?
              <Navigate to="/"/>
              :
              <Register/>} />

              <Route path="/login" 
              element={loggedIn 
              ?
              <Navigate to="/"/> 
              :
              <LogIn  updateData={updateData}/>} />
              
              <Route path="/:user" 
              element={loggedIn 
              ?
              <UserMenu/>
              :
              <Navigate to="/"/> }/>
            </Routes>
          </main>
    </div>
  );
}

export default App;
