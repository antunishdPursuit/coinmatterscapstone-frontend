import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../navLogo.png";
import "../CSS/NavBar.css";
import axios from "axios";
import { AuthData } from "../context/GetUser";
const API = process.env.REACT_APP_API_URL;

function NavBar() {
  const navigate = useNavigate(); 
  const { loggedIn } = AuthData();
  
  function LogOut(){
    axios
    .post(`${API}/logout`, {}, { withCredentials: true })
    .then((res) => {
      sessionStorage.clear();
      window.location.reload();
      navigate("/")
    })
    .catch((error) => {
      console.error("catch", error);
    });
  }

  return (
    <nav className="navbar">
      <div className="logo-div">
        <Link to="/">
          <img src={navLogo} alt="My App Logo" className="nav-logo" />
        </Link>
        <span className="nav-title">CoinsMatter</span>
      </div>
      <div className="navbar-links">
        <Link className="links-tab" to="/">Home</Link>
        <Link className="links-tab" to="/about">About Us</Link>
        <Link className="links-tab" to="/search">Search</Link>
        {loggedIn ? 
          <Link className="links-tab" onClick={LogOut}>Log Out</Link>
          
        : 
          <Link className="links-tab" ></Link>
        }
      </div>
    </nav>
  );
}

export default NavBar;
