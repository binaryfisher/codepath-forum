import "./postImg.css"


const PostImg = ({src})=>{

    return(
        <div className="post-img-container"><img className="post-img" src={src} alt="there is no image here"></img></div>
    );
}

export default PostImg;