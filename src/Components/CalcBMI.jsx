import React, { useState } from 'react';
import '../Styles/DataStyle.css';

const CalcBMI = () => {

  const [height,setHeight] = useState();
  const [weight,setWeight]=useState();
  const [BMI,setBMI] = useState();
  const [overToggle,setOverToggle]=useState(false);
  const [lessToggle,setlessToggle]=useState(false);


  const heightHandler=(e)=>{
    console.log(e.target.value);
    
    if(e.target.value.length === 0){
      setlessToggle(false);
      setOverToggle(false);
    }
    else if(e.target.value < 100){
      setlessToggle(true);
      setOverToggle(false)
    }
    else if(e.target.value > 270){
      setOverToggle(true);
      setlessToggle(false);
    }
    else{
      setlessToggle(false);
      setOverToggle(false);
      setHeight(e.target.value);
    }
  }

  const weightHandler=(e)=>{
    setWeight(e.target.value);
  }

  const formSubmit=(e)=>{
    e.preventDefault()
  }

  const bmiClickHandler=()=>{
    let result= (weight)/(height/100*height/100);
    setBMI(result.toFixed(2));
  }

    return (
      <div>
          <form onSubmit={formSubmit}>
            <label>Height</label>
            <input type="text" onChange={heightHandler}/>
            {overToggle ? <p>Your height should not be over 270 cm</p>: null}
            {lessToggle ? <p>Your height should not be less 100 cm</p>: null}
            <label>Current Weight</label>
            <input type="text" onChange={weightHandler}/>
            <input type="submit" value="Calc BMI" onClick={bmiClickHandler}/>
          </form>   
          <div>Yout BMI is: {BMI}</div> 
      </div>
    );
};

  export default CalcBMI;