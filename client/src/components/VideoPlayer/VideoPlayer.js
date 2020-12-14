import React, { useState } from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ url, instructions }) {
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
          animation: videoLoaded ? "videoFadeIn 1s 1s ease forwards" : "",
        }}
      />
      <div
        className={videoLoaded ? "loading-text-off" : "loading-text"}
        style={{
          animation: videoLoaded ? "loadingTextFadeOut 0.5s forwards" : "",
        }}
      >
        Loading Video...
      </div>
      <div className="video-instructions">
        {instructions}
      </div>
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
