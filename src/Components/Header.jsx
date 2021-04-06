import React, {useState} from "react";
import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Menu} from 'semantic-ui-react';
import MainLogIn from "./MainLogIn";
import PopUp from "./PopUpWindow";

const Header =()=>{

    const [popUpSeen,setPopUpSeen] = useState(false);
    const [btnToggle,setBtnToggle] = useState(true)

    const togglePop = () => {
        setPopUpSeen(!popUpSeen);
        setBtnToggle(!btnToggle);
    };

    return(
        <div>
            <Menu pointing secondary style={{margin:'0'}}>
               <Menu.Item name="homepage"><Link to="/" >Homepage</Link></Menu.Item> 
               <Menu.Item name="mymeals"><Link to="/mymeals" >My Meals</Link></Menu.Item>
               <Menu.Item name="bmi"><Link to="/bmi" >BMI</Link></Menu.Item>
               <Menu.Item name="recipes"><Link to="/recipes" >Recipes</Link></Menu.Item>  
               <Menu.Item name="login"><p onClick={togglePop} style={{marginLeft:'1500px',cursor:'pointer'}}>Login</p></Menu.Item>  
            </Menu>
            {
            popUpSeen ? <PopUp toggle={togglePop} content={<MainLogIn/>}/> : null
          }  
        </div>
        )   
}

export default Header;