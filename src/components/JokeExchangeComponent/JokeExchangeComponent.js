import React from "react";
import "./JokeExchangeComponent.css";

export default function JokeExchange() {

  return (
    <div className="joke-container">
      <div>
        <audio
          controls
          autoPlay
          src="/assets/jokeintro.mp3">
              Your browser does not support the
              <code>audio</code> element.
        </audio>
      </div>
      <div>
        <img src="/assets/comedy_response.gif" alt="Cartoon" />
      </div>
      <div>
        <br/>
        <p><a href="https://scottishtecharmy.slack.com/archives/C01FR2Q170D" target="_blank"><strong>Post you jokes in the #advent-2020 channel</strong></a></p>
      </div>
      
    </div>
  );
}
