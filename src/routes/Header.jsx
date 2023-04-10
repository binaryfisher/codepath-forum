import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Search, Label} from 'semantic-ui-react'
import SearchBox from "../components/SearchBox";
import "./header.css"
import { useState, useEffect } from "react";
import { supabase } from "../client";

import Home from "./Home";

const Header = () =>{
   
  const [dataToBeSearched, setDateToBeSearched] = useState([{
    id:"",
    created_at:"",
    title:"",
    content:"",      
    img_url:"",
    upvotes:0,
    comments:[]
  }]);


  useEffect(() =>{
    const fetchData = async()=>{
      
            const {data} = await supabase
                .from("posts")
                .select()
                .order("created_at", {ascending:false});
            setDateToBeSearched(data);
            
      
    }

  fetchData();


  },[]);


    return (
        <>
          <div className="header">
            <div className="header-title">Book Hub</div>

            <SearchBox dataToBeSearched={dataToBeSearched} />
           
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/createpost'>Create New Post</Link>
            </div>

          </div>
          <Outlet />
        </>
    );
}

export default Header;
