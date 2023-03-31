import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Search, Label} from 'semantic-ui-react'
import SearchBox from "../components/SearchBox";
import "./header.css"

const Header = () =>{


    return (
        <>
          <div className="header">
            <div className="header-title">xxxHub</div>

            <SearchBox />
           
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/createpost'>Create New Post</Link>
            </div>

          </div>
          <Outlet />
        </>
    );
}

export default Header;
