import React, { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
import config from "./config.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header/Header";
import CalendarPage from "./pages/CalendarPage";
import ActivityPage from "./pages/ActivityPage";
import WallOfAwesome from "./pages/WallOfAwesome";
import Snowflakes from "./components/Snowflakes/Snowflakes";
import Login from "./components/Login";
import Day25 from "./components/Day25";
import Popup from "./components/Popup/Popup";

function App() {
  const [page, setPage] = useState("calendar-page");
  const [openWindow, setOpenWindow] = useState(null);
  const [show25Window, setShowDay25Window] = useState(false);

// For Production
const [showPasswordEntry, setShowPasswordEntry] = useState(true);
const [currentDate] = useState(moment().format("YYYYMMDD"));


// For Development
// const [showPasswordEntry, setShowPasswordEntry] = useState(false);
// const [currentDate] = useState("20201225");

  const allDays = config.days;
  const popupMessage = "You will need to wait for that day!";
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
          setDay25Window={setShowDay25Window}
          currentDate={currentDate}
        />
      );
    }
    if (show25Window === true) {
      return (
        <Day25
          setDay25Window={setShowDay25Window}
          setOpenWindow={setOpenWindow}
          setPage={setPage}
        />
      );
    }
    if (showPasswordEntry === false && show25Window === false) {
      return null;
    }
  };

  // const CheckForPete = (returnDay) => {
  //   // console.log("return day:", returnDay)
  //   const showPeteStatus = () => {
  //     if (returnDay === 21) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };
  //   setShowPete(showPeteStatus);
  // };

  function togglePopup(showPopup, returnDay) {
    // CheckForPete(returnDay);
    const popupStatus = () => {
      if (showPopup === true) {
        return false;
      } else {
        return true;
      }
    };
    setShowPopup(popupStatus);
  }

  function pageInView(page) {
    if (page === "activity-page") {
      return (
        <ActivityPage
          setPage={setPage}
          openWindow={openWindow}
          setOpenWindow={setOpenWindow}
          allDays={allDays}
          setShowPete={setShowPete}
        />
      );
    } else if (page === "calendar-page") {
      return (
        <CalendarPage
          setPage={setPage}
          allDays={allDays}
          currentDate={currentDate}
          setOpenWindow={setOpenWindow}
          togglePopup={togglePopup}
          showPopup={showPopup}
          setShowPete={setShowPete}
        />
      );
    } else if (page === "wall-of-awesome") {
      return <WallOfAwesome />;
    } else {
      return <></>;
    }
  }

  return (
    <div>
      <div className="App">
        <Header page={page} setPage={setPage} />
        <ActivateChristmasCheer />
        <Snowflakes showPete={showPete} />
        <main className={showPasswordEntry || show25Window ? "App-main" : null}>
          <Container fluid>
            <Row>
              <Col className="main-page">{pageInView(page)}</Col>
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
