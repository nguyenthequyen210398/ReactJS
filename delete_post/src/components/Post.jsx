import React, { useState } from 'react';
import './Post.css';
import Comment from './Comment';

function Post(props) {
    console.log("Post", props);
    const [content, setContent] = useState(props.post?.content);
    const [likeNumber, setLikeNumber] = useState(0);
    const [obj, setObj] = useState({author: "Thế Quyền"});
    
    const name = props.post?.title;

    const id = props.post?.id;


    const showLength = () => { return content?.length;}

    const textChangeHandle = (event) => {
        setContent(event.target.value);
    }

    const iconLikeClick = () => {
       setLikeNumber(current => ++current);

    }
    
    const iconPenClick = () => {
       setObj({ author: "gau21"});
    }


    return <React.Fragment>
        <h2>{name} (id:{id})</h2>
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={content} onChange={textChangeHandle}></textarea>
        <p>Author: <i>{obj.author}</i> <i onClick={iconPenClick} className="fa-solid fa-pen"></i></p>    
        {likeNumber} <i onClick={iconLikeClick} className="fa fa-thumbs-up"></i>
        <br />
        <Comment></Comment>
    
        <p>Leng of content: <span className='bold'>{showLength()}</span></p>
    </React.Fragment>
}


export default Post;