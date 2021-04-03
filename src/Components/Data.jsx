import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AutoCompleteApi from "./AutoCompleteApi";
import '../Styles/DataStyle.css';
let foodInfoArr=[];

const FoodDataBaseAPI = ({foodArr}) => {

const [foodApi,setFoodApi]=useState([]);
const [query,setQuery]=useState('rou');
// const [search,setSearch]=useState('');

const getApi= async () => {
    try{
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=&ingr=${query}&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response.data.parsed);
        setFoodApi(response.data.parsed)
       
    }catch(err){
            console.log(err); 
    }
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query]);
  
// const changeHandler=(e)=>{
//     setSearch(e.target.value);
//     if(e.target.value === "") {
//         setFoodApi([]);
//     }
// }

const searchResults =(search)=>{
    setFoodApi(null);
    setQuery(search);  
}


const addHandler=(index)=>{
    console.log(index);
    let foodObj={
        label:foodApi[index].food.label,
        foodId:foodApi[index].food.foodId,
        foodImg:foodApi[index].food.image,
        calories:foodApi[index].food.nutrients.ENERC_KCAL,
        fat:foodApi[index].food.nutrients.FAT,
        fibers:foodApi[index].food.nutrients.FIBTG,
        protein:foodApi[index].food.nutrients.PROCNT,
        carbs:foodApi[index].food.nutrients.CHOCDF,
    }

    foodInfoArr.push(foodObj);
    console.log(foodInfoArr);
    foodArr(foodInfoArr);
}


    return (
      <div>
          {/* <input type="search" onChange={changeHandler} style={{height:'30px'}}/>
          <input type="button" value="Search" onClick={searchResults}/> */}
        <AutoCompleteApi q={searchResults} />
        { (foodApi==null) ? (<h3>Loading...</h3>) : (
              foodApi.map((f,index)=>{
                  return<div className="foodTypes" key={index}><img src={f.food.image} alt="" height="40"/>{f.food.label}<button onClick={() => addHandler(index)}>ADD</button></div>
              })
          ) }               
      </div>
    );
};

  export default FoodDataBaseAPI;