import React, { useState } from 'react';
import '../Styles/MealsStyle.css';
import PopUp from "./PopUpWindow";

const Meals = ({title,imgSrc}) => {

  const [popUpSeen,setPopUpSeen] = useState(false);
  const [foodArr,setFoodArr] = useState([]);
  
  const togglePop = () => {
      setPopUpSeen(!popUpSeen);
  };

  const setFoodArrFunc = (chosenFoodArr) => {
    // if(localStorage.getItem('foodArr')){
    //   setFoodArr(JSON.parse(localStorage.getItem('foodArr')));
    // }
    // else{
    //   setFoodArr(chosenFoodArr);
    // }
    // localStorage.setItem('foodArr', JSON.stringify(chosenFoodArr));
    console.log("meals",foodArr);
    setFoodArr(chosenFoodArr);

};

  return (
    
      <div>
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
                   <tr key={index}>
                     <td>{x.label}</td>
                     <td>{x.calories}</td>
                   </tr>
                ))  
              }   
            </tbody>
      </table>
          <img src={imgSrc} alt=""  width="400"/>
          {
            popUpSeen ? <PopUp toggle={togglePop} foodArr={setFoodArrFunc}/> : null
          }  
      </div>
    );
};

export default Meals;