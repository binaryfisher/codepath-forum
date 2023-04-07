import "./form.css"

const ForumForm = ({btnTxt, handleFormBtn}) =>{
    return(
        <>
        <form>
        <input type="text" id="title" name="title" placeholder="Title"></input>
        <textarea id="content" placeholder="Content(Optional)" rows="11" cols="33"></textarea>
        <input type="text" id="imgUrl" name="imgUrl" placeholder="Image URL(Optional)"></input>
        <button className="form-btn" onClick={handleFormBtn}>{btnTxt}</button>        
        </form>
    </>
    )
}

export default ForumForm;