import React, { useState} from 'react';
import '../CSS/BmiStyle.css';
import Button from "./Button";

const CalcBMI = () => {

  const [height,setHeight] = useState(0);
  const [weight,setWeight]=useState('');
  const [BMI,setBMI] = useState('');
  const [overToggle,setOverToggle]=useState(false);
  const [lessToggle,setlessToggle]=useState(false);
  const [bmiRange,setBmiRange]=useState('');
  const [bmiInfoArr,setBmiInfoArr] = useState([0,0,0,0]);
  const bmiScale = [18.5,25,30,40];
  

//   useEffect(()=>{
//     if(localStorage.getItem('BMI-Weight')){
//       setWeight(JSON.parse(localStorage.getItem('BMI-Weight')));
//     }
//     else{
//       localStorage.setItem('BMI-Weight', JSON.stringify(weight));
//     }
// },[weight]);

  const heightHandler=(e)=>{
    switch(true){
      case (e.target.value.length === 0):
        setlessToggle(false);
        setOverToggle(false);
        break;
      case (e.target.value < 100):
        setlessToggle(true);
        setOverToggle(false)
        break;
      case (e.target.value > 270):
        setOverToggle(true);
        setlessToggle(false);
        break;
      default:
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
    let result= (weight)/(Math.pow(height/100, 2));
    setBMI(result.toFixed(2));
    if(result <= 18.5)
      setBmiRange('Underweight');
    else if(result > 18.5 & result < 25)
      setBmiRange('Normal Weight');
    else if(result >= 25 & result < 30)
      setBmiRange('Overweight');
    else if(result >= 30 & result < 40)
      setBmiRange('Obese level 1');
    else if(result >= 40)
      setBmiRange('Obese level 2');

    let arr=[];
    arr=bmiScale.map((x)=>{
      return ((Math.pow(height/100, 2))*x).toFixed(1);
    })
    setBmiInfoArr(arr);
    if(height === 0){
      setBMI(0);
    }
  }

    return (
      <div className="bmiMain">
        
      <h1>BMI Calculator</h1>
      <h2>Body mass index</h2>
        <div className="bmiContainer">
          <div className="formContainer">
            <form onSubmit={formSubmit} className="form">
              <label>Height</label>
              <input type="text" onChange={heightHandler}/>
              {overToggle ? <p className="textToggle">Your height should not be over 270 cm</p>: null}
              {lessToggle ? <p className="textToggle">Your height should not be less 100 cm</p>: null}
              <label>Current Weight</label>
              <input type="text" onChange={weightHandler} value={weight}/>
              <Button click={bmiClickHandler} content={'Calc BMI'}/>
            </form>   
            <div className="bmiResult">Your BMI is: <span>{BMI}</span> {bmiRange}</div>
            <input readOnly type="range" min="18" max="45" value={BMI} className="slider" id="myRange"/>
            </div> 

            <div className="bmiInfoDiv">
                <p><span>Underweight (Below 18.5)</span> {bmiInfoArr[0]}</p>
                <p><span>Normal Weight (18.5-25)</span> {bmiInfoArr[0]} - {bmiInfoArr[1]}</p>
                <p><span>Overweight (25-30)</span> {bmiInfoArr[1]} - {bmiInfoArr[2]}</p>
                <p><span>Obese level 1 (30-40)</span> {bmiInfoArr[2]} - {bmiInfoArr[3]}</p>
                <p><span>Obese level 2 (Above 40)</span> {bmiInfoArr[3]}</p>              
            </div>
            <a className="moreInfoTag" href="https://en.wikipedia.org/wiki/Body_mass_index"  target="blank">More information</a>
          </div>
         
      </div>
    );
};

  export default CalcBMI;