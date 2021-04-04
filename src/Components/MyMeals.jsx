import React from 'react';
import Meals from "./Meals";
import "../Styles/MealsStyle.css";
import BreakfastImg from "../Assets/breakfast.jpg";
import LunchImg from "../Assets/lunch.jpeg";
import Dinner from "../Assets/dinner.jpg";
import Snacks from "../Assets/snacks.jpeg";



const MyMeals = () => {

    return (
      <div className="mealsContainer">
           <Meals title="BREAKFAST" imgSrc={BreakfastImg} />
           <Meals title="LUNCH" imgSrc={LunchImg}/>
           <Meals title="DINNER" imgSrc={Dinner}/>  
           <Meals title="SNACKS" imgSrc={Snacks}/>  
      </div>
    );
};

  export default MyMeals;