import React from "react";
import HomepageInfo from "./HomepageInfo";
import {Link} from "react-router-dom";
import "../CSS/HomepageStyle.css";

const Homepage =()=>{

        return(
            <div className="homepageContainer">
                <div className="welcome"><h1>Welcome to </h1><div className="titleImage"></div></div>
                <div className="headerImage"></div>
                <div style={{display:'flex'}}>
                    <div className="homepageInfo"> 
                        <h2>What Is Good Nutrition?</h2>
                        <HomepageInfo/>
                    </div>
                    <div className="about">
                        <span style={{fontSize:'50px'}}>What will you find here</span>
                        <ul>
                        <Link to="/mymeals" ><li>Organize your daily meals and get complete information about each meal</li></Link>
                        <Link to="/recipes" ><li>Find recipes by type of food, amount of calories and more</li></Link>
                        <Link to="/bmi"><li>Get your BMI (Body mass index)</li></Link>
                        </ul>
                    </div>
                </div>  
            </div>
        )
    
}

export default Homepage;