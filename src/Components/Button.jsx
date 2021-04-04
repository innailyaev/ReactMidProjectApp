import React from "react";
import '../Styles/ButtonStyle.css';

const Button =({content,click})=>{


  return (
    <div>
       <button className="btn" onClick={click}>{content}</button>
   </div>
  );
}

export default Button;