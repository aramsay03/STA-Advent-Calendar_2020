import React, { useState, useEffect } from "react";
import moment from "moment";

const DayBox = ({
  daysdata,
  currentDate,
  handleSelectedDay
}) => {

  const giftBox = (
    <div>
      <h1>{daysdata.day}</h1>
    </div>
  );

  return (
    <Col key={index} className="calendar-window" xs={4} sm={3} md={2}>
      <b>{days.day}</b>
      {days.day ? (
        <Button onClick={handleClick}>Open</Button>
      ) : (
        <Button disabled>Open</Button>
      )}
    </Col>
    <li className={classes.list}>
      <div
        className={classes.link}
        daysdata={daysdata}
        onClick={() => handleSelectedDay(daysdata)}
      >
        {giftBox}
      </div>
    </li>
  );
};

export default DayBox;
