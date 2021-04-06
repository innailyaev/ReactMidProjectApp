import React from "react";
import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Menu} from 'semantic-ui-react';

const Header =({handelLogOut})=>{


    return(
            <Menu pointing secondary style={{margin:'0'}}>
               <Menu.Item name="homepage"><Link to="/" >Homepage</Link></Menu.Item> 
               <Menu.Item name="mymeals"><Link to="/mymeals" >My Meals</Link></Menu.Item>
               <Menu.Item name="bmi"><Link to="/bmi" >BMI</Link></Menu.Item>  
               <Menu.Item><button onClick={handelLogOut}>LogOut</button></Menu.Item>
            </Menu>
        )   
}

export default Header;