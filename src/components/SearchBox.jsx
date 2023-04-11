
import { useState } from 'react';
import "./searchBox.css"
import {AiOutlineSearch } from 'react-icons/ai';
 import { Link } from 'react-router-dom'; 

const SearchBox = ({dataToBeSearched}) => {

      const [selectedResult, setSelectedResult] = useState([{title:"", url:""}]);
      const resultContainer = document.querySelector(".result-container");

      const handleInputChange = (event) =>{
       
         let inputString = event.target.value;
         let result = [];
         if(inputString.trim()){
            resultContainer.style.display = "block";
            dataToBeSearched.forEach(element => {
               if( element.title.trim().toUpperCase().startsWith(inputString.trim().toUpperCase())){
               result.push({title:element.title,url:"/post/" + element.id})
               }
         });
      
         }else{
           resultContainer.style.display = "none";
         }
         setSelectedResult(result);
        
      }

      const handleInputBoxFocusOut = (event)=>{
         resultContainer.style.display = "none";
      }
      
      const handleInputBoxFocus = ()=>{
         // resultContainer.style.display = "block";
      }

    return(
       <div className='search-box'>
         
         <div className="input-container">
            <input className='input-box'  onInput={handleInputChange}></input>
            <div className="icon-container"><AiOutlineSearch /></div>
         </div>
          <div className='result-container'>
             {selectedResult && selectedResult.length > 0 ? (
               selectedResult.map((item, index) =>(<div className='searchBoxItemLine' key={index}> <Link className='search-box-result-url' to={item.url}>{item.title}</Link>  </div>))
             ):(<div>Not Found</div>)}

          </div>

       </div>
    );
};


export default SearchBox;
