import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const logInUser = (existingUser) => {
    console.log(existingUser)
    axios
      .post(`${API}/login`, existingUser)
      .then(
      (res) => {
      // navigate(`/about`);
      })
      .catch((c) => {
        console.error("catch", c)
      });
  };

    // If email was previouls used, it will not work
  const handleTextChange = (event) => {
      setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      logInUser(user)
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-auto">
              <div className="form-floating">
                <label htmlFor="email">Email: </label>
                <input
                id="email" 
                type="email" 
                value={user.email}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="email:"
                required
                />
              </div>
                <br></br>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="password">Password: </label>
                <input 
                id="password"
                type="password" 
                value={user.password}
                checked={user.password}
                onChange={handleTextChange}
                className="form-check-input" 
                />
              </div>
                <br></br>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn