import React from 'react';

const Hero =({handelLogOut})=>{

    return (
        <div className="hero"> 
            <button onClick={handelLogOut}>LogOut</button>
        </div>
    )
}

export default Hero;