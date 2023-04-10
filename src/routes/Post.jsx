
import "./post.css"
import { CiEdit } from 'react-icons/ci';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useEffect, useState } from "react";
import PostImg from "../components/PostImg";
import CommentsArea from "../components/CommentsArea";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const Post = () =>{
    
    const navigate = useNavigate();
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

    const handlePostDelete = async()=>{
      const {error} = await supabase
        .from("posts")
        .delete()
        .eq("id", id);
      navigate("/");
       
    }

    const getPostedDateString = () =>{

      const postedDate = new Date(post.created_at);
      const now = Date.now();
      const days = (now - postedDate.getTime())/86400000;

      if(Math.floor(days*24*60) < 2){
          let postedDateString = " just now";
          return postedDateString;
      }
      else if(days <= 0.0417){
         let postedDateString = Math.floor(days*24*60) + " minutes ago";
         return postedDateString;
      }else if(days > 0.0417 && days < 1){

          let postedDateString = Math.floor(days*24)  + " hours ago";
          return postedDateString;

      }
      else if(days >= 1 && days < 2){
          let postedDateString =  "1 day ago";
          return postedDateString;
      }else if(days >= 2 && days < 7){
          let postedDateString = Math.floor(days) + " days ago";
          return postedDateString;
      }else if(days >= 7 && days < 14){
          let postedDateString =  " 1 week ago";
          return postedDateString;
      }else if(days >= 14 && days < 30 ){
          let postedDateString = Math.floor(days/7) + " weeks ago";
          return postedDateString;

      }else{
          let postedDateString = "more than 1 month ago"
      }
  }


    return(
      <div className="post-view">
       <div className="post-time">{"Posted " + getPostedDateString()}</div>
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
                <div className='post-edit' onClick={handlePostEdit} ><Link to={"/post/" + id +"/edit"}> <CiEdit /></Link> </div>
                <div className='post-delete' onClick={handlePostDelete} > <Link><AiTwotoneDelete /></Link> </div>
            </div>
           
       </div>

       <CommentsArea postId={post.id} comments={post.comments}/>
      </div>
    )
}

export default Post;