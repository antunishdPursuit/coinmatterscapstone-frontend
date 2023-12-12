// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
// PAGES

import Results from "./Pages/Results"

// COMPONENTS
import NavBar from "./Components/NavBar";
import About from "./Pages/About"
import Landing from "./Components/Landing/Landing";
import Register from "./Components/Landing/Register";
import LogIn from "./Components/Landing/LogIn";
import Cart from "./Pages/Cart"
import UserList from "./Components/Searches/UserList";

function App() {

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
      <Router>
        <NavBar></NavBar>
        <main>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/about" element={<About/>} />
            <Route 
            path="/search" 
            element={<UserList/>} />
            <Route path="/search-results/:query" element={<Results />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" 
            element={sessionStorage.getItem("LoggenIn") === "True" 
            ?
            <Navigate to="/"/>
            :
             <Register/>} />

            <Route path="/login" 
            element={sessionStorage.getItem("LoggenIn") === "True" 
            ?
            <Navigate to="/"/> 
            :
            <LogIn  updateData={updateData}/>} />
            <Route path="/"/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
