import React from 'react'
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./Landing.css";


function LandingNavBar() {
  return (
    <div className="header">
        <div className="logo-container">
            <Link to="/"><img src={logo} alt="My App Logo" className="logo" /></Link>
        </div>
        <div className="links">
            <Link to="/search">Search</Link>
            <Link to="/about">About Us</Link>
        </div>
    </div>
  )
}

export default LandingNavBar