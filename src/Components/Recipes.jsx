import React,{useState} from 'react';
import axios from 'axios';
import data from "./RecipesHealthDietData";
import '../Styles/RecipesStyle.css';
import Button from "./Button";
import RecipeCard from "./RecipeCard";

const Recipes =()=>{

    const [foodQuery,setFoodQuery]=useState('');
    const [caloriesMax,setCaloriesMax]=useState('');
    const [maxIngredients,setMaxIngredients]=useState();
    const [health,setHealth] = useState('');
    // const [diet,setDiet] = useState('');
    const [recipesArr,setRecipesArr] = useState([]);
    // const [searchBtnToggle,setSearchBtnToggle] = useState(false);



    const getApi= async () => {
        console.log("getApi");
        try{
            const response = await axios.get(`https://api.edamam.com/search?q=${foodQuery}&app_id=6504a240&app_key=1aa89bcf5cd432ba57341d0194528787&calories=${caloriesMax}&health=${health}&ingr=${maxIngredients}`);
            console.log(response.data.hits);
            setRecipesArr(response.data.hits);  
        }catch(err){
                console.log(err); 
        }
    }
    
    const healthChangeHandler=(e)=>{
        setHealth(e.target.value);
    }

    const FoodQueryHandler =(e)=>{
        setFoodQuery(e.target.value);      
    }

    // const checkHandler =()=>{
    //     if(recipesArr.length===0){
    //         setSearchBtnToggle(false);
    //         return false;
    //     }
    //     else{
    //     setSearchBtnToggle(!searchBtnToggle);
    //     return true;
    //     }
    // }

    const clickHandler=()=>{
            getApi();
    }



    return (
        <div className="recipesMain">
            <div className="recipesContainer">
                <h1>Find your recipe</h1>
                <div className="recipesSearch">
                    <label htmlFor="foodType">Type Of Food:</label>
                    <input type="text" id="foodType" onChange={FoodQueryHandler}/>
                    <label htmlFor="maxCal">Max Calories:</label>
                    <input type="text" id="maxCal" onChange={(e) => setCaloriesMax(e.target.value)}/>
                    <label>Max Ingredients:</label>
                    <input type="number" min="0" max="100" onChange={(e) => setMaxIngredients(e.target.value)}/>
                    <label>Health:</label>
                    <select name="" id="" onChange={healthChangeHandler} defaultValue='Choose Health Label...' >
                    <option disabled  hidden>Choose Health Label...</option>
                        {
                            data.health.map((x,index)=>{
                                return <option key={index} value={x}>{x}</option>
                            })
                        }
                    </select>
                        <Button click={clickHandler} content="Search"/>
                </div>
                <div className="cardContainer">
                    {
                        recipesArr.map((x,index)=>(
                            <RecipeCard key={index} label={x.recipe.label} 
                                        dishType={x.recipe.dishType}
                                        calories={x.recipe.calories}
                                        image={x.recipe.image}
                                        ingre={x.recipe.ingredientLines}
                                        mealType={x.recipe.mealType}
                                        servingNum={x.recipe.yield}
                                        linkRecipe={x.recipe.url}/>
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}

export default Recipes;