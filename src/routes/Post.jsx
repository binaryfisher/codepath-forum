
import "./post.css"
import { CiEdit } from 'react-icons/ci';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useState } from "react";
import PostImg from "../components/PostImg";
import CommentsArea from "../components/CommentsArea";
import { Link } from "react-router-dom";


const Post = () =>{

    const [upvotesNum, setUpvotesNum] = useState(0)

    const handlePostUpvote = () =>{
      setUpvotesNum(upvotesNum + 1);
    }

    const handlePostEdit = () =>{
       
    }

    const handlePostDelete = ()=>{
       
    }

    return(
      <div className="post-view">
       <div className="post-time">post 5 days ago</div>
       <h3 className="post-title">My favourite book</h3>
       <div className="post-content">My favourite book is xxxxxxx. The reason why....kkkkkk</div>
       <PostImg src={""} />
       <div className="functions-panel">
            <div className="post-upvotes" >
                 <div className="post-upvotes-icon" onClick={handlePostUpvote} ><FaRegThumbsUp /> </div> 
                 <div className="post-upvotes-num">{upvotesNum} upvotes</div>
            </div>
            <div className='post-edit-delete'>
                <div className='post-edit' onClick={handlePostEdit} ><Link to='/post1/edit'> <CiEdit /></Link> </div>
                <div className='post-delete' onClick={handlePostDelete} > <Link><AiTwotoneDelete /></Link> </div>
            </div>
           
       </div>

       <CommentsArea />
      </div>
    )
}

export default Post;