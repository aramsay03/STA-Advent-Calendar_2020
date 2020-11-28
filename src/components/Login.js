import React, { useState } from "react";
import "./Login.css";

export default function Login({ setShowPasswordEntry }) {
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordInput(e);
    if (passwordInput === "a") {
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
