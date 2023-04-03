import "./postLine.css"
import { Link } from "react-router-dom";
const PostLine = () =>{

    return(
        <div className="post-line">
            <div className="post-time">3 days ago</div>         
            <div className="post-title"><Link> This is the title</Link> </div>
            <div className="post-upvotes">5 upvotes</div>
          
            
        </div>
    );
}

export default PostLine