import React from 'react';
import "./CalendarDoor.css"

function CalendarDoor() {

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

  return (

  );
};

export default CalendarDoor;
