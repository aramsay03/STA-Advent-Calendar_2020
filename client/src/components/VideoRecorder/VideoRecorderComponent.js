import React, { useState } from "react";
import axios from "axios";
import "./VideoRecorder.css";
import VideoRecorder from "react-video-recorder";

function VideoRecorderComponent() {
  const [file, setFile] = useState(null);

  function createPresignedUrl() {
    return fetch('/presign', {method: 'GET'}).then(r => r.json());
  }

  const submitFile = async () => {
    try {
      if (!file) {
        throw new Error("Select a file first!");
      }
      // get to receive JSON
      // parse the JSON
      // get the uploadUrl
      // use axios.put with the url and the data

      const formData = new FormData();
      formData.append("file", file);
      await axios.put(`/uploadurl`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      createPresignedUrl()
        .then((res) => {
          // upload the file first
          return uploadFile(res.url, file).then(() => res.filename);
        })
        .then((filename) => {
          // now we know the filename of what got uploaded, send that
          // to the form in place of the actual file
          submitForm(filename).then(() => {
            alert(`Hooray you uploaded ${filename}`);
            formData.reset();
          });
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
      <form onSubmit={submitFile}>
        <button type="submit">Send</button>
      </form>
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
