import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import config from "./config.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarPage from "./pages/CalendarPage";
import ActivityPage from "./pages/ActivityPage";
import Snowflakes from "./components/Snowflakes/Snowflakes";
// const currentDate = moment().format("D MMM YYYY");
function App() {
  const [page, setPage] = useState("calendar-page");
  const [openWindow, setOpenWindow] = useState(null);
  const currentDate = "14 Dec 2020";
  const allDays = config.days;

  return (
    <div className="App">
      <Snowflakes />
      <main className="App-main">
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
  );
}

export default App;
