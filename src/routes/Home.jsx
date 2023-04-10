import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import "./home.css"
import { useEffect, useState } from 'react'
import PostLine from '../components/PostLine'
import { supabase } from "../client";

const Home = () =>{

    const [allPosts, setAllPosts] = useState([{
        id:"",
        created_at:"",
        title:"",
        content:"",      
        img_url:"",
        upvotes:0,
        comments:[]
    }]);

   
    
    const[orderBy, setOrderBy] = useState("Newest");
   
    const handleBtnClick = (event) =>{

        const buttons = document.querySelectorAll(".order-filter-panel button");
        buttons.forEach(button=>{
            button.classList.remove("selected");
        })       

       event.target.classList.add("selected");
       setOrderBy(event.target.innerHTML);
       
    }

    useEffect(() =>{
        const fetchData = async()=>{
            if(orderBy == "Newest"){
                const {data} = await supabase
                    .from("posts")
                    .select()
                    .order("created_at", {ascending:false});
                setAllPosts(data);

           }
           if(orderBy == "Most Popular"){
                const {data} = await supabase
                    .from("posts")
                    .select()
                    .order("upvotes", {ascending:false});
                setAllPosts(data);

           }
          
        }

       fetchData();
  

    },[orderBy])

    
   
    return(
        <div className="home">
            <div className='order-filter-panel'>
                Order By:
                <button id='newestBtn' className='selected' onClick={handleBtnClick}>Newest</button>
                <button id='popularBtn' onClick={handleBtnClick}>Most Popular</button>
            </div>

            <div className='home-post-lines-container'>
              
               {allPosts.length > 0 && allPosts[0].id != "" ? (
                 allPosts.map((post, index)=>(
                    
                    <PostLine key={index} postId={post.id} postTime={post.created_at} postTitle={post.title} upvotes={post.upvotes} />
               
                    ))
                ):(null)

              }
               
            </div>

        </div>
    )
}


export default Home