// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// PAGES

import Results from "./pages/Results"

// COMPONENTS
import NavBar from "./layout/NavBar";
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
  
  return (
    <div className="app">
          <NavBar></NavBar>
          {/* <Router></Router> */}
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
              <LogIn />} />
              
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
