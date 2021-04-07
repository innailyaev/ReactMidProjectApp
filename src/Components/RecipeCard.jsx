import React,{useState} from 'react';
import "../Styles/RecipesStyle.css";
import Button from "./Button";
import PopUp from './PopUpWindow';

const RecipeCard =({label,dishType,calories,image,ingre,mealType,servingNum,linkRecipe})=>{

    const [popUpSeen,setPopUpSeen] = useState(false);

    const togglePop = () => {
        setPopUpSeen(!popUpSeen);
    };  

    return (
            <div className="card"> 
                <p style={{color:'#184e77' , fontSize:"30px"}}>{label}</p>
                <p>Dish Type: {dishType}</p>
                <p>Meal Type: {mealType}</p>
                <img src={image} alt=""></img>
                <p>Calories: {(calories/servingNum).toFixed(1)}</p>
                <Button content="See ingredients" click={togglePop}/> 
                <a href={linkRecipe} rel="noreferrer" target='_blank' style={{color:'#184e77', borderBottom:'solid thin black'}}>Go to recipe</a><br/> 
                {
                    popUpSeen ? <PopUp toggle={setPopUpSeen} content=
                    {
                        <ol>
                            {
                                ingre.map((x,index)=>(
                                    <li key={index} style={{padding:'20px'}}>{x}</li>
                                ))
                            }
                        </ol>
                    }/> : null
                }
            </div>
        
    )
}

export default RecipeCard;