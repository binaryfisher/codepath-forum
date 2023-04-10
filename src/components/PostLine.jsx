import "./postLine.css"
import { Link } from "react-router-dom";
const PostLine = ({postId,postTime, postTitle, upvotes}) =>{

    const postedDate = new Date(postTime);
    const now = Date.now();
    const days = (now - postedDate.getTime())/86400000;
    const getPostedDateString = () =>{
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
            let postedDateString = "Posted more than 1 month ago"
        }
    }
    
    return(
        <div className="post-line">
            <div className="post-time">{"Posted " + getPostedDateString()}</div>         
            <div className="post-title"><Link to={"/post/" + postId}>{postTitle} </Link> </div>
            <div className="post-upvotes">{upvotes + " upvotes"}</div>
          
            
        </div>
    );
}

export default PostLine