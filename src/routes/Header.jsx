import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Search, Label} from 'semantic-ui-react'
import "./header.css"

const Header = () =>{

    // const initialState = {
    //     loading: false,
    //     results: [],
    //     value: '',
    //   }

    
    // function exampleReducer(state, action) {
    //     switch (action.type) {
    //     case 'CLEAN_QUERY':
    //         return initialState
    //     case 'START_SEARCH':
    //         return { ...state, loading: true, value: action.query }
    //     case 'FINISH_SEARCH':
    //         return { ...state, loading: false, results: action.results }
    //     case 'UPDATE_SELECTION':
    //         return { ...state, value: action.selection }
    
    //     default:
    //         throw new Error()
    //     }
    // }
    
    // const resultRenderer = ({title}) => <Label content={title} />

    // const {loading, result, value} = state;

    // const handleSearchChange = () => {

    // }

    

    


    return (
        <>
          <div className="header">
            <div className="header-title">xxxHub</div>
           
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
