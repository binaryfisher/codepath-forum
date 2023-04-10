import "./form.css"
import { supabase } from "../client";

const ForumForm = ({btnTxt, handleFormBtn, title, content, img_url}) =>{

 

    return(
        <>
        <form>
        <input type="text" id="title" name="title" placeholder="Title" defaultValue={title}></input>
        <textarea id="content" placeholder="Content(Optional)" rows="11" cols="33" defaultValue={content} ></textarea>
        <input type="text" id="imgUrl" name="imgUrl" placeholder="Image URL(Optional)" defaultValue={img_url}></input>
        <button className="form-btn" onClick={handleFormBtn}>{btnTxt}</button>        
        </form>
    </>
    )
}

export default ForumForm;