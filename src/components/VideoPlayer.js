import React from 'react';
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";

function VideoPlayer({url}) {
  return (
    <Container className="video-container">
      <h3>Embed video</h3>
      <ReactPlayer
        url={url}
      />
    </Container>
  );
}

export default VideoPlayer;
