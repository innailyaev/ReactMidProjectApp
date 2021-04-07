import React from 'react';
import '../CSS/LogInStyle.css';

const Hero =({handelLogOut})=>{

    return (
        <div className="hero"> 
            <button className="signInbtn" onClick={handelLogOut}>LogOut</button>
        </div>
    )
}

export default Hero;