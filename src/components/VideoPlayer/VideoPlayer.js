import React, { useState } from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ url, instructions }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="wrapper">
      <ReactPlayer
        className="video-player"
        url={url}
        controls={true}
        height={"30vh"}
        width={"90vw"}
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
        className="loading-text"
        style={{
          animation: videoLoaded ? "loadingTextFadeOut 0.5s forwards" : "",
        }}
      >
        Loading Video...
      </div>
      { instructions? (<div>
        <p className="video-instructions">{instructions}</p>
      </div>):(<></>)}
    </div>
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
