import React, { useState } from "react";
import "./Login.css";

export default function Login({ setShowPasswordEntry }) {
  const [passwordInput, setPasswordInput] = useState("");
  const XMAS_PASSWORD = process.env.REACT_APP_XMAS_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordInput(e);
    if (passwordInput === XMAS_PASSWORD) {
      setShowPasswordEntry(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <h3 className="password-text">Welcome Back STA Volunteer!</h3>
          <label className="password-text">Please enter password</label>
          <input
            type="text"
            name="password"
            className="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
          <input className="login-btn" type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
}
