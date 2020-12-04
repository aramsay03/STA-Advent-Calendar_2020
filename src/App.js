import React, { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
import config from "./config.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarPage from "./pages/CalendarPage";
import ActivityPage from "./pages/ActivityPage";
import Snowflakes from "./components/Snowflakes/Snowflakes";
import Login from "./components/Login";
import Popup from "./components/Popup/Popup";

function App() {
  const [page, setPage] = useState("calendar-page");
  const [openWindow, setOpenWindow] = useState(null);

  // For Production
  // const [showPasswordEntry, setShowPasswordEntry] = useState(true);
  // const [currentDate] = useState(moment().format("D MMM YYYY"));

  // For Development
  const [showPasswordEntry, setShowPasswordEntry] = useState(false); //<---- Use for development only
  const [currentDate, setCurrentDate] = useState("08 Dec 2020");

  const allDays = config.days;
  const popupMessage =
    "You will need to wait for that day!";
  const [showPopup, setShowPopup] = useState(false);
  const [showPete, setShowPete] = useState(false);

  useEffect(() => {
    ActivateChristmasCheer();
  });

  const ActivateChristmasCheer = () => {
    if (showPasswordEntry === true) {
      return (
        <Login
          showPasswordEntry={showPasswordEntry}
          setShowPasswordEntry={setShowPasswordEntry}
        />
      );
    }
    if (showPasswordEntry === false) {
      return null;
    }
  };

  const CheckForPete = (returnDay) => {
    // console.log("return day:", returnDay)
    const showPeteStatus = () => {
      if ( returnDay === 3 ) {
        return true
      } else {
        return false
      }
    }
    setShowPete(showPeteStatus);
  }

  function togglePopup(showPopup, returnDay) {
    // CheckForPete(returnDay);
    const popupStatus = () => {
      if (showPopup === true) {
        return false;
      } else {
        return true;
      }
    }
    setShowPopup(popupStatus);
  }

  return (
    <div>
      <div className="App">
        <header>
          {/* {showPete === true ? (
              <img src="/assets/Pete-Head.gif" alt="Pete" id="logo" />
              ) : <img
              id="logo"
              src="/STA_Christmas20Official2.png"
              alt="Scottish Tech Army Christmas Logo"
          />} */}
          <img
            id="logo"
            src="/STA_Christmas20Official2.png"
            alt="Scottish Tech Army Christmas Logo"
          />
          <span className="title">
            <h1>SCOTTISH TECH ARMY</h1>
            <h2>Advent Calendar 2020</h2>
          </span>
          <img
            id="logo"
            src="/On-It.gif"
            alt="Scottish Tech Army On It Logo"
          />
        </header>
        <ActivateChristmasCheer />
        <Snowflakes />
        <main className={showPasswordEntry ? "App-main" : null}>
          <Container fluid>
            <Row>
              <Col className="space-between-header">
                {page === "activity-page" ? (
                  <ActivityPage
                    setPage={setPage}
                    openWindow={openWindow}
                    setOpenWindow={setOpenWindow}
                    allDays={allDays}
                  />
                ) : (
                  <CalendarPage
                    setPage={setPage}
                    allDays={allDays}
                    currentDate={currentDate}
                    setOpenWindow={setOpenWindow}
                    togglePopup={togglePopup}
                    showPopup={showPopup}
                  />
                )}
              </Col>
              {showPopup ? (
                <Popup
                  text={popupMessage}
                  showPopup={showPopup}
                  closePopup={togglePopup}
                />
              ) : null}
            </Row>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
