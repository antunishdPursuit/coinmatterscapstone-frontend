import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import navLogo from "../navLogo.png";
import "../NavBar.css";

function NavBar() {
  const { username } = useParams();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-div">
        <Link to="/">
          <img src={navLogo} alt="My App Logo" className="nav-logo" />
        </Link>
        <span className="nav-title">CoinMatters</span>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {username && location.pathname.includes("/home/") && (
        <div className="user-info">Welcome, {username}!</div>
      )}
    </nav>
  );
}

export default NavBar;
