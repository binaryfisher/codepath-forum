import React, { useState } from "react";

import "./editPost.css"
import Form from "../components/ForumFrom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client";

const EditPost = () =>{

    let{id} = useParams();
    const navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState({
        id:"",
        created_at:"",
        title:"",
        content:"",      
        img_url:"",
        upvotes:0,
        comments:[]
    });

    useEffect(()=>{
        const getPost = async() =>{
          const {data} = await supabase
          .from("posts")
          .select()
          .eq("id",id );
          setCurrentPost(data[0]);
          console.log(data)
        }
  
        getPost();
      },[]);

    const handleBtnClick = async()=>{
        event.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const imgUrl = document.getElementById("imgUrl").value;

        if(title && title.trim()){
            await supabase
                .from('posts')
                .update({title: title, content:content, img_url: imgUrl})
                .eq("id", id);
                alert("This post has been updated!");
            navigate("/post/" + id)

        }else{
            alert("The title can not be empty!")
        }

    }  

    return(
        <div className="edit">
            <Form btnTxt="Edit Post" handleFormBtn={handleBtnClick}  title={currentPost.title} content={currentPost.content} img_url={currentPost.img_url} />
        </div>
    )

};


export default EditPost;