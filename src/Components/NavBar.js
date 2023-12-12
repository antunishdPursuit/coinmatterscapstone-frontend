import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../navLogo.png";
import "../CSS/NavBar.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function NavBar() {
  const navigate = useNavigate(); 
  
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
        <span className="nav-title">CoinMatters</span>
      </div>
      <div className="links">
        <Link to="search">Search</Link>
        <Link to="/about">About Us</Link>
        {sessionStorage.getItem("LoggenIn") === "True" ? 
          <Link onClick={LogOut}>Log Out</Link>
        : 
          <Link >Temp</Link>
        }
      </div>
    </nav>
  );
}

export default NavBar;
