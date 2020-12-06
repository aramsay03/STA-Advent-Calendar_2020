import React from "react";
import "./VideoRecorder.css";
import VideoRecorder from "react-video-recorder";

function VideoRecorder() {
  return (
    <VideoRecorder
      onRecordingComplete={(videoBlob) => {
        // Do something with the video...
        console.log("videoBlob", videoBlob);
      }}
      chunkSize={250}
      constraints={{
        audio: true,
        video: true,
      }}
      countdownTime={3000}
      dataAvailableTimeout={500}
      isFlipped
      mimeType={undefined}
      onError={function noRefCheck() {}}
      onOpenVideoInput={function noRefCheck() {}}
      // onRecordingComplete={function noRefCheck() {}}
      onStartRecording={function noRefCheck() {}}
      onStopRecording={function noRefCheck() {}}
      onStopReplaying={function noRefCheck() {}}
      onTurnOffCamera={function noRefCheck() {}}
      onTurnOnCamera={function noRefCheck() {}}
      renderActions={function noRefCheck() {}}
      renderDisconnectedView={function noRefCheck() {}}
      renderErrorView={function noRefCheck() {}}
      renderLoadingView={function noRefCheck() {}}
      renderUnsupportedView={function noRefCheck() {}}
      renderVideoInputView={function noRefCheck() {}}
      replayVideoAutoplayAndLoopOff
      showReplayControls
      timeLimit={15000}
    />
  );
}

export default VideoRecorder;
