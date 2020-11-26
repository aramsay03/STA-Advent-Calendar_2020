import React from 'react';
import ReactPlayer from "react-player";

function VideoPlayer({url}) {
  return (
    <div>
      <h3>Embed video</h3>
      <ReactPlayer
        url={url}
      />
    </div>
  );
}

export default VideoPlayer;
