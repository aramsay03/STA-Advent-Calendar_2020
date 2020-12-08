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
        <img src="/assets/cake-1914463_640.jpg" alt="Cartoon" />
      </div>
      
    </div>
  );
}
