import React, { useState } from 'react';
import './VideoPlayer.css';
import ReactPlayer from 'react-player/lazy';
import Container from 'react-bootstrap/Container';

// <video id="background-video" loop autoPlay>
//   <source src="assets/caledonia_sta_final.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>
function VideoPlayer({ url }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Container className="video-container">
      <ReactPlayer
        className="video-player"
        url={url}
        onReady={() => setVideoLoaded(true)}
        style={{
          animation: videoLoaded ? 'videoFadeIn 1.5s 0.5s ease forwards' : '',
        }}
      />

      <div
        className="loading-text"
        style={{
          animation: videoLoaded ? 'loadingTextFadeOut 0.5s forwards' : '',
        }}
      >
        Loading Video...
      </div>
    </Container>
  );
}

export default VideoPlayer;
