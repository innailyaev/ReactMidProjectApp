import React from "react";
import MainLogIn from "./MainLogIn";

export default class Homepage extends React.Component{
    constructor(props){
        super();
    }


    render(){
        return(
            <div>
                <MainLogIn/>
            </div>
        )
    }
}