import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AutoCompleteApi = ({q}) => {

const [msg,setMsg]=useState('none');
const [AutoCompleteApi,setAutoCompleteApi]=useState([]);
const [search,setSearch]=useState('');

const getApi = async () => {
    try{
        setMsg('none');
        const response= await axios.get(`http://api.edamam.com/auto-complete?q=${search}&limit=10&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response);
        setAutoCompleteApi(response.data)
       
    }catch(err){
            console.log(err); 
            setMsg('block');
    }
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[search]);
  

const changeHandler=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
}

const searchResults =()=>{
    console.log(search);
    q(search);
}

    return (
      <div>
          <input type="search" onChange={changeHandler}/>
          <input type="button" value="Search" onClick={searchResults}/>
          
          { (AutoCompleteApi==null) ? (<h3>Loading...</h3>) : (
              AutoCompleteApi.map((f,index)=>{
                  return<option key={index}>{f}</option>
              })
          ) }      
       
               
      </div>
    );
};

  export default AutoCompleteApi;