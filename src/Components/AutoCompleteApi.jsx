import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Button from './Button';
import '../Styles/DataStyle.css';



const AutoCompleteApi = ({q}) => {

const [AutoCompleteApi,setAutoCompleteApi]=useState([]);
const [search,setSearch]=useState('');

const getApi = async () => {
    try{
        const response= await axios.get(`http://api.edamam.com/auto-complete?q=${search}&limit=10&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        setAutoCompleteApi(response.data)  
    }catch(err){
            console.log(err); 
    }
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[search]);
  

const changeHandler=(e)=>{
    setSearch(e.target.value);
}

const searchResults =()=>{
    q(search);
}

    return (
      <div className="autoCompleteContainer">
        <input list="food" type="search" onChange={changeHandler}/>
        <Button  content="Search" click={searchResults}/>
        <datalist id="food">
          { (AutoCompleteApi==null) ? (<h3>Loading...</h3>) : (
              AutoCompleteApi.map((f,index)=>{
                  return<option key={index}>{f}</option >
              })
          ) }  
        </datalist>       
      </div>
    );
};

  export default AutoCompleteApi;