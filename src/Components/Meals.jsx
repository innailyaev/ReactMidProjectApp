import React, { useState } from 'react';
import '../Styles/MealsStyle.css';
import PopUp from "./PopUpWindow";
import Data from "./Data";

const Meals = ({title,imgSrc}) => {

  const [popUpSeen,setPopUpSeen] = useState(false);
  const [foodArr,setFoodArr] = useState([]);
  
  const togglePop = () => {
      setPopUpSeen(!popUpSeen);
  };

  const setFoodArrFunc = (dataFoodArr) => {
    // if(localStorage.getItem('foodArr')){
    //   setFoodArr(JSON.parse(localStorage.getItem('foodArr')));
    // }
    // else{
    //   setFoodArr(chosenFoodArr);
    // }
    // localStorage.setItem('foodArr', JSON.stringify(chosenFoodArr));
    setFoodArr(dataFoodArr);
    console.log("meals",foodArr);
};

const rowClickHandler=(index)=>{
  console.log(foodArr[index].label);
  console.log(foodArr[index].fat);
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
                    <th style={{width:'100px'}}>CAL</th>
                </tr>
            </thead>
            <tbody>
              {
                foodArr.map((x,index)=>(
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
            popUpSeen ? <PopUp toggle={togglePop} content={<Data dataFoodArr={setFoodArrFunc} addbtn={togglePop}/>}/> : null
          }  
      </div>
    );
};

export default Meals;