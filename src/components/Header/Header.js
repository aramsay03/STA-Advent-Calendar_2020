import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";

function Header({ page, setPage }) {
  function wallOfAwesomeButton() {
    if (page === "wall-of-awesome") {
      setPage("calendar-page");
    } else {
      setPage("wall-of-awesome");
    }
  }

  return (
    <header>
      {/* {showPete === true ? (
          <img src="/assets/Pete-Head.gif" alt="Pete" id="logo" />
          ) : <img
          id="logo"
          src="/STA_Christmas20Official2.png"
          alt="Scottish Tech Army Christmas Logo"
      />} */}
      <div className="header-col"></div>
      <div className="header-col">
        <img
          id="logo"
          src="/STA_Christmas20Official2.png"
          alt="Scottish Tech Army Christmas Logo"
        />
        <span className="title">
          <h1>SCOTTISH TECH ARMY</h1>
          <h2>Advent Calendar 2020</h2>
        </span>
        <img id="logo" src="/On-It.gif" alt="Scottish Tech Army On It Logo" />
      </div>
      <div className="header-col">
        <Button onClick={() => wallOfAwesomeButton()}>
          {page === "wall-of-awesome" ? "Back" : "Wall of Awesome"}
        </Button>
      </div>
    </header>
  );
}

export default Header;
