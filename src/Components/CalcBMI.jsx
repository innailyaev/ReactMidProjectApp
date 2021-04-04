import React, { useState } from 'react';
import '../Styles/BmiStyle.css';
import Button from "./Button";

const CalcBMI = () => {

  const [height,setHeight] = useState();
  const [weight,setWeight]=useState();
  const [BMI,setBMI] = useState('');
  const [overToggle,setOverToggle]=useState(false);
  const [lessToggle,setlessToggle]=useState(false);
  const [bmiRange,setBmiRange]=useState('');

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
    if(result<=18.5)
      setBmiRange('Underweight');
    else if(result >18.5 & result <= 25)
      setBmiRange('Normal Weight');
    else if(result >25 & result <=30)
      setBmiRange('Overweight');
    else if(result >30 & result <=40)
      setBmiRange('Obese level 1');
    else if(result >40)
      setBmiRange('Obese level 2');
  }

    return (
      <div>
          <h1>BMI Calculator</h1>
          <div className="bmiContainer">
            <form onSubmit={formSubmit} className="form">
              <label>Height</label>
              <input type="text" onChange={heightHandler}/>
              {overToggle ? <p className="textToggle">Your height should not be over 270 cm</p>: null}
              {lessToggle ? <p className="textToggle">Your height should not be less 100 cm</p>: null}
              <label>Current Weight</label>
              <input type="text" onChange={weightHandler}/>
              <Button click={bmiClickHandler} content={'Calc BMI'}/>
            </form>   
            <div>Your BMI is: {BMI} {bmiRange}</div>
            <input readOnly type="range" min="18.5" max="40" value={BMI} className="slider" id="myRange"/>
            </div> 
          
      </div>
    );
};

  export default CalcBMI;