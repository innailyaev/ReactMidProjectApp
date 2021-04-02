import React, { useState } from 'react';
import '../Styles/MealsStyle.css';
import Data from "./Data";

const Meals = ({title,imgSrc}) => {

  const [btnClick,setBtnClick] = useState(false);
  const clickHandler=()=>{
     setBtnClick(!btnClick);
  }

    return (
      <div>
          <div><button onClick={clickHandler} >+</button><span>   {title}</span></div>
          <img src={imgSrc} alt="" height="100"/>
          {
            btnClick ? <Data/> : null
          }  
      </div>
    );
};

  export default Meals;