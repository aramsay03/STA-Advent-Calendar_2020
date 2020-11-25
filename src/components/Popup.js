import React from 'react';
import '../App.css';

const PopUp = ({text, closePopup}) => {
    return (
        <div className="popup">  
        <div className="popupInner">
          
          <h1>{text}</h1>  
          <button
            onClick={closePopup}
            variant="contained"
            color="gray"
            >CLOSE</button>  
        </div>  
      </div>
    );
}
 
export default PopUp;