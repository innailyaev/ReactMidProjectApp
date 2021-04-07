import React from "react";
import '../CSS/ButtonStyle.css';

const Button =({content,click})=>{


  return (
    <div>
       <button className="btn" onClick={click}>{content}</button>
   </div>
  );
}

export default Button;