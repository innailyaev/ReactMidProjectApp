import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/DataStyle.css';

const FoodDataBaseAPI = () => {

const [msg,setMsg]=useState('none');
const [foodApi,setFoodApi]=useState([]);
const [query,setQuery]=useState('rou');
const [search,setSearch]=useState('');
const [chosenFood,setChosenFood]=useState();


const getApi= async () => {
    try{
        setMsg('none');
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=&ingr=${query}&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response.data.hints);
        setFoodApi(response.data.parsed)
       
    }catch(err){
            console.log(err); 
            setMsg('block');
    }
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query]);
  
const changeHandler=(e)=>{
    setSearch(e.target.value);
    if(e.target.value === "") {
        setFoodApi([]);
    }
}

const searchResults =()=>{
    setFoodApi(null);
    setQuery(search);  
}

const clickHandler=(index)=>{
    console.log(index);
    setChosenFood(index);
}


    return (
      <div>
          <input type="search" onChange={changeHandler}/>
          <input type="button" value="Search" onClick={searchResults}/>

        { (foodApi==null) ? (<h3>Loading...</h3>) : (
              foodApi.map((f,index)=>{
                  return<div className="foodTypes" key={index} onClick={() => clickHandler(index)}><img src={f.food.image} alt="" height="40"/>{f.food.label}</div>
              })
          ) }               
      </div>
    );
};

  export default FoodDataBaseAPI;