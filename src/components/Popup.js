import React from "react";
import VideoPlayer from "./VideoPlayer";

const PopUp = ({ closePopup, url }) => {
  return (
    <div className="popup">
      <div className="popupInner">
        <VideoPlayer url="https://www.youtube.com/watch?v=9jTyxdNgsZE" />
        <button onClick={closePopup} variant="contained" color="gray">
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default PopUp;
