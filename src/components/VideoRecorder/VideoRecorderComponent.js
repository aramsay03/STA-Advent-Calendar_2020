import React, { useState } from "react";
import axios from "axios";
import "./VideoRecorder.css";
import VideoRecorder from "react-video-recorder";

function VideoRecorderComponent() {
  const [file, setFile] = useState(null);

  const submitFile = async () => {
    try {
      if (!file) {
        throw new Error("Select a file first!");
      }
      const formData = new FormData();
      formData.append("file", file[0]);
      await axios.post(`/test-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // handle success
    } catch (error) {
      // handle error
    }
  };

  function recordingComplete(string, recordedVideo) {
    setFile(string, recordedVideo);
  }

  return (
    <>
      <VideoRecorder
        onRecordingComplete={(videoBlob) => {
          recordingComplete("videoBlob", videoBlob);
          console.log("videoBlob", videoBlob);
          console.log(file);
        }}
        replayVideoAutoplayAndLoopOff
        showReplayControls
        timeLimit={15000}
      />
      <form onSubmit={submitFile}>
        {/* <label>Upload file</label> */}
        <input type="file" onChange={(event) => setFile(event.target.files)} />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default VideoRecorderComponent;
