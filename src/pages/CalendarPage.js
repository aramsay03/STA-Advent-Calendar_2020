import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import moment from "moment";

function CalendarPage({
  setPage,
  setOpenWindow,
  currentDate,
  allDays,
  togglePopup,
  showPopup,
  setShowPete
}) {

  function handleClick(day) {
    // if (day.day === 7) {
    //   setShowPete(true);
    // }
    setOpenWindow(day);
    setPage("activity-page");
  }

  function calendarWindow(day) {
    if (moment(day.Date).isSame(currentDate) === true) {
      return (
        <img
          src={"assets/Advent" + day.day + ".svg"}
          alt=""
          onClick={() => handleClick(day)}
        />
      );
    } else if (moment(day.Date).isAfter(currentDate) === true) {
      return (
        <img
          src={"assets/Advent" + day.day + ".svg"}
          alt=""
          onClick={() => togglePopup(showPopup)}
          className="calendar-window"
        />
      );
    } else {
      return (
        <div className="calendar-window">
          <b>{day.day}</b>
          <Button onClick={() => handleClick(day)}>Replay</Button>
        </div>
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
    <Container className="calendar-windows-container">
      <Row>{daysWindow}</Row>
    </Container>
  );
}

export default CalendarPage;
