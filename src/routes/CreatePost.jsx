import React from "react";

import "./createPost.css"


const CreatePost = () =>{

    return(
        <div className="create">
           <form>
              <input type="text" id="title" name="title" placeholder="Title"></input>
              <textarea id="content" placeholder="Content(Optional)" rows="11" cols="33"></textarea>
              <input type="text" id="imgUrl" name="imgUrl" placeholder="Image URL(Optional)"></input>  
              <button className="create-btn">Create Post</button>        
           </form>
        </div>
    )

};


export default CreatePost;