
import "./post.css"
import { CiEdit } from 'react-icons/ci';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useEffect, useState } from "react";
import PostImg from "../components/PostImg";
import CommentsArea from "../components/CommentsArea";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";

const Post = () =>{

    const {id} = useParams();
    const [upvotesNum, setUpvotesNum] = useState(0)
    const [post, setPost] = useState({
      id:"",
      created_at:"",
      title:"",
      content:"",      
      img_url:"",
      upvotes:0,
      comments:[]
  });

    const handlePostUpvote = async() =>{
      let updatedUpvotes = upvotesNum + 1;
      setUpvotesNum(updatedUpvotes)
      const {error} = await supabase
      .from("posts")
      .update({upvotes: updatedUpvotes})
      .eq("id",id );
    }

    useEffect(()=>{
      const getPost = async() =>{
        const {data} = await supabase
        .from("posts")
        .select()
        .eq("id",id );
        setPost(data[0]);
        setUpvotesNum(data[0].upvotes)
      }

      getPost();
    },[])

    const handlePostEdit = () =>{
       
    }

    const handlePostDelete = ()=>{
       
    }

    return(
      <div className="post-view">
       <div className="post-time">{post.created_at}</div>
       <h3 className="post-title">{post.title}</h3>
       <div className="post-content">{post.content}</div>
       {post.img_url ? (
        <PostImg src={post.img_url} />
       ):(null)}
       
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

       <CommentsArea comments={post.comments}/>
      </div>
    )
}

export default Post;