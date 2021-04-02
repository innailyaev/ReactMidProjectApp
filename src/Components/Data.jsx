import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AutoCompleteApi from "./AutoCompleteApi";


const FoodDataBaseAPI = () => {

const [msg,setMsg]=useState('none');
const [foodApi,setFoodApi]=useState([]);
const [query,setQuery]=useState('rou');

const getApi= async () => {
    try{
        setMsg('none');
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=&ingr=${query}&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response);
        setFoodApi(response.data.hints)
       
    }catch(err){
            console.log(err); 
            setMsg('block');
    }
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query]);
  

const searchResults =(search)=>{
    setFoodApi(null);
    console.log(search);
    setQuery(search);  
}

    return (
      <div>
        <AutoCompleteApi q={searchResults}/>     
        { (foodApi==null) ? (<h3>Loading...</h3>) : (
              foodApi.map((f,index)=>{
                  return<li key={index}>{index},{f.food.label}</li>
              })
          ) }      
        
                   
      </div>
    );
};

  export default FoodDataBaseAPI;