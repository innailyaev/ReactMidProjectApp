import React from "react";
import "../Styles/PopUpStyle.css";

const PopUp =({toggle,content})=>{

const handleClick = () => {
   toggle();
};


  return (
    <div className="modal">
        <div className="modalContent">
            <span className="close" onClick={handleClick}>&times;</span>
            <p></p>
            {content}
        </div>
   </div>
  );
}


export default PopUp;