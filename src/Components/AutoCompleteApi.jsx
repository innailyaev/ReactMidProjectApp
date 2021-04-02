import React, { useEffect, useState , useRef } from 'react';
import axios from 'axios';


const AutoCompleteApi = ({q}) => {

const [AutoCompleteApi,setAutoCompleteApi]=useState([]);
const [search,setSearch]=useState('');
const divRef=useRef();

const getApi = async () => {
    try{
        const response= await axios.get(`http://api.edamam.com/auto-complete?q=${search}&limit=10&app_id=1c87de18&app_key=c1cbf7b34d0750940e80b69794171b04`);
        console.log(response);
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
    console.log(e.target.value);
    setSearch(e.target.value);
}

const searchResults =()=>{
    console.log(search);
    q(search);
}

const clickHandler=()=>{
    console.log(divRef.current);
}

    return (
      <div>
          <input type="search" onChange={changeHandler}/>
          <input type="button" value="Search" onClick={searchResults}/>
          
          { (AutoCompleteApi==null) ? (<h3>Loading...</h3>) : (
              AutoCompleteApi.map((f,index)=>{
                  return<div ref={divRef} key={index} onClick={() => clickHandler()}>{f}</div>
              })
          ) }  
            
       
               
      </div>
    );
};

  export default AutoCompleteApi;