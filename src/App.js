import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarPage from "./pages/CalendarPage";
import ActivityPage from "./pages/ActivityPage";

function App() {
  const [page, setPage] = useState("calendar-page");

  return (
    <div className="App">
      <header className="App-header">
        <h1>STA Advent Calendar 2020</h1>
      </header>
      <main className="App-main">
        <Container fluid>
          <Row>
            <Col className="App-main-left flex-grow-1">
              <h2>left side</h2>
            </Col>
            <Col className="App-main-center flex-grow-1">
              {page === "activity-page" ? (
                 <ActivityPage setPage={setPage} />
              ) : (
                <CalendarPage setPage={setPage} />
              )}
            </Col>
            <Col className="App-main-right flex-grow-1">
              <h2>right side</h2>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
