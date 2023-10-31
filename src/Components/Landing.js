import React from "react";
import logo from "../logo.png";
import "../Landing.css";

function Landing() {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="My App Logo" className="logo" />
        </div>
        <div className="links">
          <a href="/home">Search</a>
          <a href="/aboutUs">About Us</a>
        </div>
      </div>
      <p className="centered outlined-text no-margin">Save Time</p>
      <p className="centered big-pink no-margin">Save Money</p>
      <div className="info-box">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.... INFO ABOUT CoinMatters, Who we are, What we do......
        </h3>
      </div>
      <div className="buttons">
        <button className="register-button">Register</button>
        <button className="login-button login">Login</button>
      </div>
    </div>
  );
}

export default Landing;
