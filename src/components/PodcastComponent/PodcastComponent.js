import React from "react";
import "./PodcastComponent.css";

export default function PodcastExchange() {

  return (
    <div className="pod-container">
      <div>
      <iframe src="https://anchor.fm/scottish-tech-army/embed/episodes/Episode-19---Global-Stories-1---AIME-Mentoring--Australia-enkmel/a-a43c4gm" className="pod-iframe" frameborder="0" scrolling="no"></iframe>
        {/* <audio
          controls
          autoPlay
          src="https://anchor.fm/scottish-tech-army/embed/episodes/Episode-19---Global-Stories-1---AIME-Mentoring--Australia-enkmel/a-a43c4gm">
              Your browser does not support the
              <code>audio</code> element.
        </audio> */}
      </div>
      <div>
        <img src="/assets/PodcastEP20.png" alt="Cartoon" />
      </div>
      {/* <div>
        <br/>
        <p><a href="https://scottishtecharmy.slack.com/archives/C01FR2Q170D" target="_blank"><strong>Post you jokes in the #advent-2020 channel</strong></a></p>
      </div> */}
      
    </div>
  );
}
