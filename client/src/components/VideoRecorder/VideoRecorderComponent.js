import React, { useState } from "react";
import axios from "axios";
import "./VideoRecorder.css";
import VideoRecorder from "react-video-recorder";

function VideoRecorderComponent() {
  const [file, setFile] = useState(null);
  const PRESIGNEDURL = process.env.REACT_APP_GET_PRESIGNEDURL;

  const submitFile = async () => {
    try {
      if (!file) {
        throw new Error("Record a video first!");
      }
      let response = await axios.get(PRESIGNEDURL);
      const url = response.data.uploadUrl;

      response = await axios.put(url, file, {
        headers: {
          "Content-Type": "video",
        },
      });

      // handle success
      console.log("success");
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  function recordingComplete(recordedVideo) {
    setFile(recordedVideo);
  }

  return (
    <>
      {file ? (
        <button onClick={submitFile}>Send</button>
      ) : (
        <p>Please record a video</p>
      )}
      <VideoRecorder
        onRecordingComplete={(videoBlob) => {
          recordingComplete(videoBlob);
        }}
        replayVideoAutoplayAndLoopOff
        showReplayControls
        timeLimit={15000}
      />
    </>
  );
}

export default VideoRecorderComponent;
