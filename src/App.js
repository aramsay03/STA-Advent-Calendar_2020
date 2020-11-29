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
// const currentDate = moment().format("D MMM YYYY");
function App() {
  const [page, setPage] = useState("calendar-page");
  const [openWindow, setOpenWindow] = useState(null);
  const [showPasswordEntry, setShowPasswordEntry] = useState(false); //<---- just set this to false until we go live
  const currentDate = "12 Dec 2020";
  const allDays = config.days;

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

  return (
    <div>
      <div className="App">
        <ActivateChristmasCheer />
        <Snowflakes />
        <main className={showPasswordEntry ? "App-main" : null}>
          <Container fluid>
            <Row>
              <header>
                <img
                  id="logo"
                  src="/STA_Christmas_20.svg"
                  alt="Scottish Tech Army Christmas Logo"
                />
                <span className="title">
                  <h1>SCOTTISH TECH ARMY</h1>
                  <h2>Advent Calendar 2020</h2>
                </span>
              </header>
            </Row>
            <Row>
              <Col>
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
                  />
                )}
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
