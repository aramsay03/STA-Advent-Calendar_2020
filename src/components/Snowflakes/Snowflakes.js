import React from 'react';
import './Snowflakes.css';

function Snowflakes(showPete) {
  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">❅</div>
      {/* <div className="snowflake">❆</div> */}
      {showPete === true ? (
              <div className="snowflake"><img src="/assets/Pete-Head.gif" alt="Pete" /></div>
              ) : <div className="snowflake">❆</div>}
      <div className="snowflake">❅</div>
      <div className="snowflake">{showPete === true ? (
              <img src="/assets/Pete-Head.gif" alt="Pete" />
              ) : "❆"}</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❆</div>
    </div>
  );
}

export default Snowflakes;

// {showPete === true ? (
//   <img src="/assets/Pete-Head.gif" alt="Pete" id="logo" />
//   ) : <img
//   id="logo"
//   src="/STA_Christmas20Official2.png"
//   alt="Scottish Tech Army Christmas Logo"
// />}