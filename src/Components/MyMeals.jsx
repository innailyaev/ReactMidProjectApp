import React from 'react';
import Meal from "./Meal";
import "../Styles/MealsStyle.css";
import BreakfastImg from "../Assets/breakfast.jpg";
import LunchImg from "../Assets/lunch.jpeg";
import Dinner from "../Assets/dinner.jpg";
import Snacks from "../Assets/snacks.jpeg";



const MyMeals = () => {

    return (
      <div className="mealsContainer">
           <Meal title="BREAKFAST" imgSrc={BreakfastImg} />
           <Meal title="LUNCH" imgSrc={LunchImg}/>
           <Meal title="DINNER" imgSrc={Dinner}/>  
           <Meal title="SNACKS" imgSrc={Snacks}/>  
      </div>
    );
};

  export default MyMeals;