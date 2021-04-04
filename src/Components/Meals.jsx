import React, { useState, useEffect } from 'react';
import '../Styles/MealsStyle.css';
import PopUp from "./PopUpWindow";
import Data from "./Data";
let foodArray;

const Meals = ({title,imgSrc}) => {

  const [popUpSeen,setPopUpSeen] = useState(false);
  const [allChosenArr,setAllChosenArr] = useState([]);
  const [totalCalories,setTotalCalories]=useState();
  
  const togglePop = () => {
      setPopUpSeen(!popUpSeen);
  };

  useEffect(()=>{
    console.log("meals once");
    foodArray=[];
  },[]);

  const setFoodArrFunc = (chosenfoodInfo) => {
    // if(localStorage.getItem('foodArr')){
    //   setFoodArr(JSON.parse(localStorage.getItem('foodArr')));
    // }
    // else{
    //   setFoodArr(chosenFoodArr);
    // }
    // localStorage.setItem('foodArr', JSON.stringify(chosenFoodArr));
    let counter=0;
    foodArray.push(chosenfoodInfo);
    setAllChosenArr(foodArray);
    console.log("meals",allChosenArr);
    foodArray.map((x)=>{
      return counter+=x.calories;
    })
    setTotalCalories(counter.toFixed(2));
};

const rowClickHandler=(index)=>{
  console.log(allChosenArr[index].label);
  console.log(allChosenArr[index].fat);
}

  return (
    
      <div className="mealTypeContainer">
        <table>
            <thead>
                <tr>
                    <th colSpan="2">{title}<button onClick={togglePop}>+</button></th>
                </tr>
                <tr>
                    <th style={{width:'300px'}}>SERVING</th>
                    <th style={{width:'100px'}}>Total-CAL {totalCalories}</th>
                </tr>
            </thead>
            <tbody>
              {
                allChosenArr.map((x,index)=>(
                   <tr key={index} onClick={() => rowClickHandler(index)}>
                     <td>{x.label}</td>
                     <td>{x.calories}</td>
                   </tr>
                ))  
              }   
            </tbody>
      </table>
          <img className="imgMeal" src={imgSrc} alt=""/>
          {
            popUpSeen ? <PopUp toggle={togglePop} content={<Data chosenFood={setFoodArrFunc} addbtn={togglePop}/>}/> : null
          }  
      </div>
    );
};

export default Meals;