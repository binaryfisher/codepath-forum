
import { useState } from 'react';
import "./searchBox.css"
import searchIcon from "../assets/search-icon.png"

  

const SearchBox = ({dataToBeSearched}) => {

    const handleInputChange = () =>{
      
    }

    return(
       <div className='search-box'>
         
         <div className="input-container">
            <input className='input-box' onInput={handleInputChange}></input>
            <div className="icon-container"><img src={searchIcon} /></div>
          </div>
          <div className='result-container'>

          </div>

       </div>
    );
};


export default SearchBox;
