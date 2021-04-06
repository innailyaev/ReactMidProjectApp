import React,{useState,useEffect} from 'react';
import axios from 'axios';
import AutoComplete from "./AutoCompleteApi";
import data from "./RecipesHealthDietData";


const Recipes =()=>{

    const [foodQuery,setFoodQuery]=useState('');
    const [caloriesRange,setCaloriesRange]=useState('0-1000');
    const [maxIngredients,setMaxIngredients]=useState(5);
    const [health,setHealth] = useState('alcohol-free');
    const [diet,setDiet] = useState('balanced');
    const [recipesArr,setRecipesArr] = useState([]);


    const getApi= async () => {
        console.log("getApi");
        try{
            const response = await axios.get(`https://api.edamam.com/search?q=${foodQuery}&app_id=6504a240&app_key=1aa89bcf5cd432ba57341d0194528787&calories=${caloriesRange}&health=${health}&ingredients=${maxIngredients}&diet=${diet}`);
            console.log(response.data.hits);
            setRecipesArr(response.data.hits);  
        }catch(err){
                console.log(err); 
        }
    }
    
    useEffect(()=>{
        console.log("rander")
        getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const searchResults =(search)=>{
        setFoodQuery(search);  
    }

    const healthChangeHandler=(e)=>{
        console.log(e.target.value);
        setHealth(e.target.value);
    }

    const dietChangeHandler=(e)=>{
        console.log(e.target.value);
        setDiet(e.target.value);
    }



    return (
        <div className="recipesContainer">
            <h1>Find your recipe</h1>
            <div>
                <AutoComplete q={searchResults}/>
                <label>Calories:</label>
                <input type="text" onChange={(e) =>{setCaloriesRange(e.target.value);}}/>
                <label>Max Ingredients:</label>
                <input type="number" min="0" max="100" onChange={(e) =>{setMaxIngredients(e.target.value);}}/>
                <label>Health:</label>
                <select name="" id="" onChange={healthChangeHandler}>
                <option disabled></option>
                    {
                        data.health.map((x,index)=>{
                            return <option key={index} value={x}>{x}</option>
                        })
                    }
                </select>
                <label>Diet:</label>
                <select name="" id="" onChange={dietChangeHandler}>
                <option disabled></option>
                    {
                        data.diet.map((x,index)=>{
                            return <option key={index} value={x}>{x}</option>
                        })
                    }
                </select>


                </div>
        </div>
    )
}

export default Recipes;