import React from "react";
import "./Popup.css";
import Button from "react-bootstrap/Button";

function Popup({ closePopup, showPopup, text }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h1>{text}</h1>
        <Button onClick={() => closePopup(showPopup)}>Back</Button>
      </div>
    </div>
  );
}

export default Popup;
