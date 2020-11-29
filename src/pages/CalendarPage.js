import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CalendarPage({ setPage, setOpenWindow, currentDate, allDays }) {

  function handleClick(day) {
    setOpenWindow(day);
    setPage("activity-page");
  }

  const daysWindow = allDays.map((day, index) => {

    return (
      <Col key={index} className="calendar-window" xs={4} sm={3} md={2}>
        {day.Date <= currentDate ? (
          <img
            src={"assets/Advent" + day.day + ".svg"}
            alt=""
            onClick={() => handleClick(day)}
          />
        ) : (
          <Button hidden>Open</Button>
        )}
      </Col>
    );
  });

  return (
    <Container fluid className="calendar-page-container">
      <Row>{daysWindow}</Row>
    </Container>
  );
}

export default CalendarPage;
