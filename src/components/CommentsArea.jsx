import { useState } from "react";
import "./commentsArea.css"
import Comment from "./Comment";

const CommentsArea = ()=>{

    const [inputPlaceHolder, setInputPlaceHolder] = useState("There aren't any comments, please leave yours!")

    return(
        <div className="comments-area">
            <div className="comments-container">
                <Comment commentContent={"this is my first comment"} />
                <Comment commentContent={"this is my first comment"} />
                <Comment commentContent={"this is my first comment"} />
            </div>
           <input className="comment-input" placeholder={inputPlaceHolder}></input>
        </div>
    )

}

export default CommentsArea;