import React, { useState } from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/Container";

function VideoPlayer({ url }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <ReactPlayer
        className="video-player"
        url={url}
        controls={true}
        config={{
          vimeo: {
            playOptions: {
              url: { url },
            },
          },
        }}
        onReady={() => setVideoLoaded(true)}
        style={{
          animation: videoLoaded ? "videoFadeIn 0.5s 0.5s ease forwards" : "",
        }}
      />
    </>
  );
}

export default VideoPlayer;

// <div
//   className="loading-text"
//   style={{
//     animation: videoLoaded ? "loadingTextFadeOut 0.5s forwards" : "",
//   }}
// >
//   Loading Video...
// </div>
