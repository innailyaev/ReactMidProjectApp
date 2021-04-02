import React from 'react';
import Meals from "./Meals";
import BreakfastImg from "../Assets/breakfast.jpg";

const MyMeals = () => {


    return (
      <div>
           <Meals title="BREAKFAST" imgSrc={BreakfastImg}/>    
      </div>
    );
};

  export default MyMeals;