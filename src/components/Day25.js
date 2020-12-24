import React from "react";
import "./Login.css";

export default function Day25({ setDay25Window, setOpenWindow, setPage }) {
  
  const day = {
      "#": 1,
      "Date": "20201225",
      "day": 25,
      "activity": "Merry Christmas",
      "component": "VideoPlayer",
      "urls": ["https://vimeo.com/494515987/fc1b79ad16"]
    }

  const handleClick = () => {
    setOpenWindow(day);
    setPage("activity-page");
    setDay25Window(false);
  };

  return (
    <div className="login">
      
        <div className="box">
          <h3 className="password-text">Christmas Day<br/>25th 2020</h3>

          <img onClick={handleClick} src="/assets/day25box.png" alt="Box25" />
          
          
        </div>
      
    </div>
  );
}
