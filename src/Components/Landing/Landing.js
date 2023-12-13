import { Link } from "react-router-dom";
import "../../CSS/Landing.css";

function Landing() {
  return (
    <div className="landing-wrapper">
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
      {sessionStorage.getItem("LoggenIn") === "True" ? (
       <Link to="">User</Link>
      ) : (
        <div className="Landing-buttons">
          <Link className="register-button" to="/register">Register</Link>
          <Link className="login-button login" to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Landing;
