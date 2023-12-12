
import "../../CSS/Landing.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import logo from "./logo.png"
function Landing() {

  return (
    <div className="landing-wrapper">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="My App Logo" className="logo" />
        </div>
        <div className="links">
          <a href="/search">Search</a>
          <a href="/aboutUs">About Us</a>
        </div>
      </div>
      <p className="centered outlined-text no-margin">Save Time</p>
      <p className="centered big-pink no-margin">Save Money</p>
      <div className="info-box">
        <h3 id="MainText">
          Are you tired of the endless struggle to save money on your grocery
          shopping? Imagine a world where you can effortlessly compare and
          contrast prices from various stores, all in one place. Introducing our
          innovative price comparison website, the ultimate solution to
          transform your shopping experience.
        </h3>
      </div>
      {!Cookies.get("dataToken") ? (
        <div className="btns">
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="login-button login">Login</button>
          </Link>
        </div>
      ) : (
        <p>Logging In</p>
      )}
    </div>
  );
}

export default Landing;
