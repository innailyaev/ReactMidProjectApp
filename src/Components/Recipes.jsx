import React,{useState} from 'react';
import axios from 'axios';
import data from "./RecipesHealthDietData";
import '../CSS/RecipesStyle.css';
import Button from "./Button";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";

const Recipes =()=>{

    const [foodQuery,setFoodQuery]=useState('');
    const [caloriesMax,setCaloriesMax]=useState('');
    const [maxIngredients,setMaxIngredients]=useState();
    const [health,setHealth] = useState('');
    const [errorMsgToggle,setErrorMsgToggle] = useState(false);
    const [recipesArr,setRecipesArr] = useState([]);
    const [recipesPerPage] =useState(4);
    const [totalRecipes, setTotalRecipes] = useState();
    let firstIndex=0;
    let lastIndex=4;
    

    const getApi= async () => {
        console.log("getApi");
        try{
            const response = await axios.get(`https://api.edamam.com/search?from=${firstIndex}&to=${lastIndex}&q=${foodQuery}&app_id=6504a240&app_key=1aa89bcf5cd432ba57341d0194528787&calories=${caloriesMax}&health=${health}&ingr=${maxIngredients}`);
            setRecipesArr(response.data.hits);
            console.log(response.data.hits);
            setTotalRecipes(20);
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

    const clickHandler=()=>{
        if(caloriesMax === '' || health === '' || maxIngredients === undefined )
            setErrorMsgToggle(true);
        else{
            setRecipesArr(null)
            setErrorMsgToggle(false);
            getApi();
        }
    }

    const paginate = (pageNumber)=>{
        firstIndex=((pageNumber*recipesPerPage)-recipesPerPage);
        lastIndex=(pageNumber*recipesPerPage);
        clickHandler(); 
        console.log(pageNumber,(pageNumber*recipesPerPage)-recipesPerPage,(pageNumber*recipesPerPage));  
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
                {
                    errorMsgToggle ? <p style={{color:'red', fontSize:'40px',marginLeft:'300px'}}>Please fill all the fields <span style={{fontSize:'25px', color:'black'}}>(The 'type of food' field is optional)</span></p> : null
                }
                <div className="cardContainer">
                {
                    (recipesArr==null) ? (<div className="ui active inline loader"></div>)
                             : recipesArr.map((x,index)=>(
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
                <Pagination recipesPerPage={recipesPerPage} totalRecipes={totalRecipes} paginate={paginate} />
            </div>
        </div>
    )
}

export default Recipes;