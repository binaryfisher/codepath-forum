import "./postLine.css"
import { Link } from "react-router-dom";
const PostLine = ({postId,postTime, postTitle, upvotes}) =>{

    return(
        <div className="post-line">
            <div className="post-time">{postTime}</div>         
            <div className="post-title"><Link to={"/post/" + postId}>{postTitle} </Link> </div>
            <div className="post-upvotes">{upvotes + " upvotes"}</div>
          
            
        </div>
    );
}

export default PostLine