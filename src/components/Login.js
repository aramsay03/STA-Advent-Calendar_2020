import React, { useState } from "react";
import "./Login.css";
import moment from "moment";

export default function Login({ setShowPasswordEntry, currentDate, setDay25Window }) {
  const [passwordInput, setPasswordInput] = useState("");
  const XMAS_PASSWORD = process.env.REACT_APP_XMAS_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordInput(e);
    if (passwordInput === XMAS_PASSWORD) {
      setShowPasswordEntry(false);
      if (moment(currentDate).isSameOrAfter("20201225") === true) {
        setDay25Window(true);
      }
    }
  };

  const showHidePassword = () => {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}  className="login-form">
        <div className="box">
          <h3 className="password-text">Welcome Back STA Volunteer!</h3>

          <input
            type="password"
            id="password"
            name="password"
            className="password"
            placeholder="Password"
            onChange={(e) => setPasswordInput(e.target.value)}
            autoFocus
            required
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="show-hide-checkbox"
              onClick={() => showHidePassword()}
            />
            Show Password
          </div>
          <input className="login-btn" type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
}
