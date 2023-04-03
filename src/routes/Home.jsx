import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import "./home.css"
import { useState } from 'react'
import PostLine from '../components/PostLine'

const Home = () =>{

    const[orderBy, setOrderBy] = useState("");
   
    const handleBtnClick = (event) =>{

        const buttons = document.querySelectorAll(".order-filter-panel button");
        buttons.forEach(button=>{
            button.classList.remove("selected");
        })       

       event.target.classList.add("selected");
       setOrderBy(event.target.innerHTML);
       
    }

    
   
    return(
        <div className="home">
            <div className='order-filter-panel'>
                Order By:
                <button onClick={handleBtnClick}>Newest</button>
                <button onClick={handleBtnClick}>Most Popular</button>
            </div>

            <div className='home-post-lines-container'>
                <PostLine />
                <PostLine />
                <PostLine />
                <PostLine />
                <PostLine />
                <PostLine />
                <PostLine />

            </div>

        </div>
    )
}


export default Home