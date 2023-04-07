import React from "react";
import { supabase } from "../client";
import "./createPost.css"
import Form from "../components/ForumFrom";


const CreatePost = () =>{
   
    const handleFormBtn = async (event) =>{

        event.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const imgUrl = document.getElementById("imgUrl").value;
        await supabase
        .from('posts')
        .insert({title: title, content:content, img_url: imgUrl});
        
        alert(title + "has been created!")
    }

    return(
        <div className="create">
            <Form btnTxt="Create Post" handleFormBtn={handleFormBtn}  />
        </div>
    )

};


export default CreatePost;