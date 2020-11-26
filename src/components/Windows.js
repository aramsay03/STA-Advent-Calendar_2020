import React from "react";
import config from "../config.json";

const Windows = ({ openPopup }) => {
  const allDays = config.days;

  const daysWindow = allDays.map((days) => {
    return (
      <li className="Window-box">
        <button onClick={openPopup}>
          <div>
            <h3>{days.day}</h3>
          </div>
        </button>
      </li>
    );
  });

  return (
    <div className="Windows-all">
      <ul>{daysWindow}</ul>
    </div>
  );
};

export default Windows;
