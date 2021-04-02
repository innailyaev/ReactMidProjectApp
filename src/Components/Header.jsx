import React from "react";
import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Menu} from 'semantic-ui-react';

export default class Header extends React.Component{
    constructor(props){
        super();
    }


    render(){
        return(
            <Menu pointing secondary>
               <Menu.Item name="homepage"><Link to="/" >Homepage</Link></Menu.Item> 
               <Menu.Item name="mymeals"><Link to="/mymeals" >mymeals</Link></Menu.Item>
               <Menu.Item name="bmi"><Link to="/bmi" >bmi</Link></Menu.Item>  
            </Menu>
        )
    }
}