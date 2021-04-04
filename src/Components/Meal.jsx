import React, { useState } from 'react';

import '../Styles/MealsStyle.css';
import PopUp from "./PopUpWindow";
import Data from "./Data";


const Meals = ({title,imgSrc}) => {

  const [popUpSeen,setPopUpSeen] = useState(false);
  const [allChosenArr,setAllChosenArr] = useState([]);
  const [totalCalories,setTotalCalories]=useState();
  
  const togglePop = () => {
      setPopUpSeen(!popUpSeen);
  };


  const setFoodArrFunc = (chosenfoodInfo) => {
    // if(localStorage.getItem('foodArr')){
    //   setAllChosenArr(JSON.parse(localStorage.getItem('foodArr')));
    // }
    // else{
    //   localStorage.setItem('foodArr', JSON.stringify(allChosenArr));
    // }
    let counter=chosenfoodInfo.calories;
    setAllChosenArr([chosenfoodInfo, ...allChosenArr]);
    allChosenArr.map((x)=>{
      return counter+=x.calories;
    })
    setTotalCalories(counter.toFixed(2));
  
};

const rowClickHandler=(index)=>{
  console.log(allChosenArr[index].label);
  console.log(allChosenArr[index].fat);
}

  return (
    
      <div className="mealContainer">
        <table>
            <thead>
                <tr>
                    <th colSpan="2">{title}<button className="plusBtn" onClick={togglePop}>+</button></th>
                </tr>
                <tr>
                    <th style={{width:'300px'}}>SERVING</th>
                    <th style={{width:'150px'}}>Total-CAL {totalCalories}</th>
                </tr>
            </thead>
            <tbody>
              {
                allChosenArr.map((x,index)=>(
                   <tr key={index} onClick={() => rowClickHandler(index)}>
                     <td>{x.label}</td>
                     <td>{x.calories.toFixed(2)}</td>
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