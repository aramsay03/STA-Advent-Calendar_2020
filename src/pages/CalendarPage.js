import React from "react";
import config from "../config.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CalendarPage({setPage}) {

  const allDays = config.days;

  function handleClick() {
    setPage("activity-page");
  };

  const daysWindow = allDays.map((days) => {
    return (
      <Col
        className="calendar-window"
        xs={4}
        sm={3}
        md={2}
      >
        {days.day}
        <Button onClick={handleClick}>Open</Button>
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
