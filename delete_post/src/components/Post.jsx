import React, { useState } from 'react';
import './Post.css';
import Comment from './Comment';
import Author from './Author';
import Icon from './Icon';
import { useLocation } from 'react-router-dom';

function Post(props) {
    console.log("Post", props);
    const location = useLocation();
    console.log("location", location);
    const post = location?.state;
    const[theme, setTheme] = useState({backgroundColor: 'white'});
    const [content, setContent] = useState(post?.content);
    const [likeNumber, setLikeNumber] = useState(0);
    const [author, setAuthor] = useState(post?.author);
    
    const name = post?.title;

    const id = post?.id;

    const showLength = () => { return content?.length;}

    const textChangeHandle = (event) => {
        setContent(event.target.value);
    }

    const iconLikeClick = () => {
       setLikeNumber(current => ++current);
        setTheme({backgroundColor: 'black'})
    }
    
   


    return <React.Fragment>
        
        <h2>{name} (id:{id})</h2>
        <i class="fa-solid fa-trash"></i>
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={content} onChange={textChangeHandle}></textarea>
        <p>~{author}~</p>
        <Author id={id} name = {author} action1 = {setAuthor}></Author>
        {likeNumber} <i onClick={iconLikeClick} className="fa fa-thumbs-up"></i>
        <br />
        <Icon id = {id}></Icon>
        <Comment></Comment>
    
        <p style={theme}>Leng of content: <span className='bold'>{showLength()}</span></p>
    </React.Fragment>
}


export default Post;