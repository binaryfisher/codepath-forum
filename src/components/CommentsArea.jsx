import { useEffect, useState } from "react";
import "./commentsArea.css"
import Comment from "./Comment";
import { BiCommentDetail } from 'react-icons/bi';
import { supabase } from "../client";

const CommentsArea = ({postId,comments})=>{
    
    
    const [inputPlaceHolder, setInputPlaceHolder] = useState("There aren't any comments, please leave yours!");
    const commentInput = document.querySelector("#comment-input");
    const [postComments, setPostComments] = useState([]);
    const [commentChangedNum, setCommentChangeNum] = useState(0);

    // setPostComments(comments)


    useEffect(()=>{



        if(comments && comments.length > 0){
            setInputPlaceHolder("Leave your comment here!")
            setPostComments(comments);
           
           
        }


    },[comments]);

    const handleCommentInput = async() =>{
        let inputString = commentInput.value;
        let updatedComments = [];
       
        if(postComments){
        
          updatedComments = [...postComments, inputString];
        
         
        }else{
            updatedComments.push(inputString);
           
        }
        if(inputString){
            
            await supabase
            .from('posts')
            .update({comments:updatedComments})
            .eq("id", postId);
           setCommentChangeNum(commentChangedNum + 1);
           setPostComments(updatedComments);
          
         
        }
    }

    return(
        <div className="comments-area">
            <div className="comments-container">
               
                { postComments && postComments.length > 0 ? (
                    postComments.map((comment, index)=>(
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