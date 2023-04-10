
import { useState } from 'react';
import "./searchBox.css"
import searchIcon from "../assets/search-icon.png"
import {AiOutlineSearch } from 'react-icons/ai';
  

const SearchBox = ({dataToBeSearched}) => {

    const handleInputChange = () =>{
      
    }

    return(
       <div className='search-box'>
         
         <div className="input-container">
            <input className='input-box' onInput={handleInputChange}></input>
            <div className="icon-container"><AiOutlineSearch /></div>
         </div>
          <div className='result-container'>

          </div>

       </div>
    );
};


export default SearchBox;
