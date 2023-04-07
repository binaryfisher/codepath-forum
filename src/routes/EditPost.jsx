import React from "react";

import "./editPost.css"
import Form from "../components/ForumFrom";


const EditPost = () =>{

    return(
        <div className="edit">
            <Form btnTxt="Edit Post"  />
        </div>
    )

};


export default EditPost;