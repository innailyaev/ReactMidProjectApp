import React from 'react';
import Meals from "./Meals";
import "../Styles/MealsStyle.css";
import BreakfastImg from "../Assets/breakfast.jpg";
import LunchImg from "../Assets/lunch.jpeg";

const MyMeals = () => {


    return (
      <div className="mealsContainer">
           <Meals title="BREAKFAST" imgSrc={BreakfastImg}/>
           <Meals title="LUNCH" imgSrc={LunchImg}/>    
    
      </div>
    );
};

  export default MyMeals;