import React from "react";

const FullNutritionInfo =({infoArr})=>{

  return (
    <div>
        <p>Full information for a 100gram serving</p>
        {/* <p> {infoArr[0].food.label}</p> */}
        <p>CAL: {infoArr[0].food.nutrients.ENERC_KCAL}</p>
        <p>FAT: {infoArr[0].food.nutrients.FAT}</p> 
        <p>FIB: {infoArr[0].food.nutrients.FIBTG}</p> 
        <p>PROT: {infoArr[0].food.nutrients.PROCNT}</p>
        <p>CARB: {infoArr[0].food.nutrients.CHOCDF}</p> 
   </div>
  );
}

export default FullNutritionInfo;