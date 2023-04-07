import React from "react";

import "./createPost.css"
import Form from "../components/ForumFrom";


const CreatePost = () =>{

    return(
        <div className="create">
            <Form btnTxt="Create Post"  />
        </div>
    )

};


export default CreatePost;