import React from "react";
import "../Styles/PopUpStyle.css";
import Data from "./Data";

const PopUp =({toggle,foodArr})=>{

const handleClick = () => {
   toggle();
};

const setArr=(chosenFoodArr)=>{
    console.log("popup",chosenFoodArr);
    foodArr(chosenFoodArr);
}


  return (
    <div className="modal">
        <div className="modalContent">
            <span className="close" onClick={handleClick}>&times;</span>
            <p>I'm A Pop Up!!!</p>
            <Data foodArr={setArr}/>
        </div>
   </div>
  );
}


export default PopUp;