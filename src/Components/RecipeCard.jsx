import React from 'react';
import "../Styles/RecipesStyle.css";
import Button from "./Button";

const RecipeCard =({label,dishType,calories,image,ingre,mealType,servingNum,linkRecipe})=>{

    const print=()=>{
        console.log(label,dishType,calories,image,ingre);
    }
    print();

    return (
            <div className="card"> 
                <p style={{color:'#184e77' , fontSize:"30px"}}>{label}</p>
                <p>Dish Type: {dishType}</p>
                <p>Meal Type: {mealType}</p>
                <img src={image} alt=""></img>
                <p>Calories: {(calories/servingNum).toFixed(1)}</p>
                <Button content="See ingredients" click={print}/> 
                <a href={linkRecipe} rel="noreferrer" target='_blank' style={{color:'#184e77'}}>Go to recipe</a><br/> 
            </div>
        
    )
}

export default RecipeCard;