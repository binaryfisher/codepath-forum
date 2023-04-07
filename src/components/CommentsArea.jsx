import { useEffect, useState } from "react";
import "./commentsArea.css"
import Comment from "./Comment";
import { BiCommentDetail } from 'react-icons/bi';

const CommentsArea = ({comments})=>{

    const [inputPlaceHolder, setInputPlaceHolder] = useState("There aren't any comments, please leave yours!");

    useEffect(()=>{
        if(comments && comments.length > 0){
            setInputPlaceHolder("Leave your comment here!")
        }
    });

    const handleCommentInput = () =>{
        
    }

    return(
        <div className="comments-area">
            <div className="comments-container">
               
                { comments && comments.length > 0 ? (
                    comments.map((comment, index)=>(
                        <Comment key={index} commentContent={comment} />
                    ))
                ):(null)

                }
            </div>
           <div className="comment-input-container"><input className="comment-input" id="comment-input" placeholder={inputPlaceHolder}></input>
           <div className="comment-icon"onClick={handleCommentInput} >
               <BiCommentDetail />
           </div>
           </div>
        </div>
    )

}

export default CommentsArea;