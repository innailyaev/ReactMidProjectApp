import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AutoCompleteApi from "./AutoCompleteApi";
import '../Styles/DataStyle.css';

let foodInfoArr=[];

const FoodDataBaseAPI = ({foodArr}) => {

const [foodApi,setFoodApi]=useState([]);
const [measuresApi,setMeasuresApi]=useState([]);
const [query,setQuery]=useState('rou');
const [calories,setCalories]=useState(0);
let chosenCal;

const getApi= async () => {
    try{
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=&ingr=${query}&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response.data.parsed);
        setFoodApi(response.data.parsed);
        setMeasuresApi(response.data.hints[0].measures);
        setCalories(response.data.parsed[0].food.nutrients.ENERC_KCAL)
       
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

const checkboxHandler=(index)=>{
    console.log(index);
    chosenCal=measuresApi[index].weight/100*calories;
    console.log(chosenCal.toFixed(2));
    addHandler(chosenCal);
}

const addHandler=(cal)=>{
    let foodObj={
        label:foodApi[0].food.label,
        foodId:foodApi[0].food.foodId,
        foodImg:foodApi[0].food.image,
        calories:cal,
        fat:foodApi[0].food.nutrients.FAT,
        fibers:foodApi[0].food.nutrients.FIBTG,
        protein:foodApi[0].food.nutrients.PROCNT,
        carbs:foodApi[0].food.nutrients.CHOCDF,
    }

    foodInfoArr.push(foodObj);
    console.log(foodInfoArr);
    
}

const addClickHandler=()=>{
    foodArr(foodInfoArr);
}


    return (
      <div>
          {/* <input type="search" onChange={changeHandler} style={{height:'30px'}}/>
          <input type="button" value="Search" onClick={searchResults}/> */}
        <AutoCompleteApi q={searchResults}/>
        { (foodApi==null) ? (<h3>Loading...</h3>) : (
              foodApi.map((f,index)=>
              {
                  return(
                    <div className="foodTypes" key={index}>
                        <img src={f.food.image} alt="" height="40"/>
                        <p>{f.food.label}</p>
                        <p>CAL: {f.food.nutrients.ENERC_KCAL} (100gram)</p>
                    </div>
              )})
        )}
          <table>
            <thead>
                <tr>
                    <th style={{width:'200px'}}>SERVING</th>
                    <th style={{width:'200px'}}>Weight</th>
                    <th style={{width:'100px'}}>CAL</th>
                </tr>
            </thead>
            <tbody>
          {
              measuresApi.map((m,index)=>(
                <tr key={index}>
                  <td>{m.label}</td>
                  <td>{((m.weight).toFixed(2))}</td>
                  <td>{((m.weight/100)*calories).toFixed(2)}</td>
                  <td><input type="checkbox" onChange={() => checkboxHandler(index)}/></td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <button onClick={addClickHandler}>ADD</button>
    </div>
    );
};

  export default FoodDataBaseAPI;