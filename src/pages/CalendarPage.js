import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CalendarPage({
  setPage,
  setOpenWindow,
  currentDate,
  allDays,
  togglePopup,
  showPopup,
}) {
  function handleClick(day) {
    setOpenWindow(day);
    setPage("activity-page");
  }

  function calendarWindow(day) {
    if (day.Date === currentDate) {
      return (
        <img
          src={"assets/Advent" + day.day + ".svg"}
          alt=""
          onClick={() => handleClick(day)}
        />
      );
    } else if (day.Date > currentDate) {
      return (
        <img
          src={"assets/Advent" + day.day + ".svg"}
          alt=""
          onClick={() => togglePopup(showPopup)}
        />
      );
    } else {
      return (
        <>
          <b>{day.day}</b>
          <Button onClick={() => handleClick(day)}>Replay</Button>
        </>
      );
    }
  }

  const daysWindow = allDays.map((day, index) => {
    return (
      <Col key={index} className="calendar-window" xs={4} sm={3} md={2}>
        {calendarWindow(day)}
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>{daysWindow}</Row>
    </Container>
  );
}

export default CalendarPage;
