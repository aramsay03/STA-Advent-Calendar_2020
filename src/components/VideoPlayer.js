import React from 'react';
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/Container";

function VideoPlayer({url}) {
  return (
    <Container className="video-container">
      <ReactPlayer
        className="video-player"
        url={url}
      />
    </Container>
  );
}

export default VideoPlayer;
