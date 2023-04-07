import "./postImg.css"


const PostImg = ({src})=>{

    return(
        <div className="post-img-container"><img className="post-img" src={src} alt="We can't load image by this URL!"></img></div>
    );
}

export default PostImg;