import React from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/Container";

// <video id="background-video" loop autoPlay>
//   <source src="assets/caledonia_sta_final.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>
function VideoPlayer({ url }) {
  return (
    <Container className="video-container">
      <ReactPlayer className="video-player" url={url} />
    </Container>
  );
}

export default VideoPlayer;
